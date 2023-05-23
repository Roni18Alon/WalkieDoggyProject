import json
import logging
from aws.dynamoDB import DynamoDB
from responses import responses

event = {'resource': '/rank', 'path': '/rank', 'httpMethod': 'POST', 'headers': None, 'multiValueHeaders': None,
         'queryStringParameters': None, 'multiValueQueryStringParameters': None, 'pathParameters': None,
         'stageVariables': None,
         'requestContext': {'resourceId': 'k4n86b', 'resourcePath': '/rank', 'httpMethod': 'POST',
                            'extendedRequestId': 'FZNLPH5JIAMFyLA=', 'requestTime': '23/May/2023:20:57:18 +0000',
                            'path': '/rank', 'accountId': '339030231570', 'protocol': 'HTTP/1.1',
                            'stage': 'test-invoke-stage', 'domainPrefix': 'testPrefix',
                            'requestTimeEpoch': 1684875438019, 'requestId': 'ae3bef06-cd2b-4ef4-952f-746bdb3e3230',
                            'identity': {'cognitoIdentityPoolId': None, 'cognitoIdentityId': None,
                                         'apiKey': 'test-invoke-api-key', 'principalOrgId': None,
                                         'cognitoAuthenticationType': None, 'userArn': 'arn:aws:iam::339030231570:root',
                                         'apiKeyId': 'test-invoke-api-key-id',
                                         'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
                                         'accountId': '339030231570', 'caller': '339030231570',
                                         'sourceIp': 'test-invoke-source-ip', 'accessKey': 'ASIAU536GZIJJ7CIUVEL',
                                         'cognitoAuthenticationProvider': None, 'user': '339030231570'},
                            'domainName': 'testPrefix.testDomainName', 'apiId': 'aej45saso5'},
         'body': '{\n    "ranking_user":"gb@example.com",\n    "rank":5,\n    "ranked_user":"ronialon2008@gmail.com"\n}',
         'isBase64Encoded': False}

# Set up logging
logger = logging.getLogger('root')
logger.setLevel(logging.INFO)
ch = logging.StreamHandler()
ch.setLevel(logging.INFO)
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)

dynamo = DynamoDB('users-info')


def lambda_handler(event, context):
    # Get event data
    logger.info(f"event: {event}")
    # get user mail from params
    # user_mail = event['queryStringParameters'].get("user_mail").lower()
    try:
        if event.get("body"):
            body = json.loads(event["body"])
            # get the user mail(the one that ranking),rank[1-5],ranked_user- the user we are ranking
            ranking_user = body.get("ranking_user")  # the user fill the rank
            rank = int(body.get("rank"))  # rank from 1 to 5
            ranked_user = body.get("ranked_user")  # the user that we are ranking

            # get ranked user data
            user = dynamo.get_item(key_name="user_email", key_value=ranked_user)
            if user:
                user_data = user[0]
                current_rank = user_data['rank']
                num_of_ranks = int(user_data['num_of_ranks'])
                new_rank = calculate_new_rank(current_rank=current_rank, num_people_ranked=num_of_ranks, new_rank=rank)
                # update the data of user in dynamo
                num_of_ranks += 1
                user_data['num_of_ranks'] = num_of_ranks
                user_data['rank'] = new_rank
                logger.info(f"update rank to user {ranked_user} with {new_rank} rank")
                dynamo.insert_item(item=user_data)
                return responses.succeeded(message=user_data)

            else:
                # Handle the case when any of the required variables are missing
                logger.error(f"can't find user {ranked_user} in system")
                return responses.failed(error=f"can't find user {ranked_user} in system", status_code=404)
    except Exception as e:
        return responses.failed(error=f"exception {e}", status_code=404)


def calculate_new_rank(current_rank, num_people_ranked, new_rank):
    # Calculate the weighted sum of the current rank and the new rank
    weighted_sum = (current_rank * num_people_ranked) + new_rank

    # Calculate the new average rank
    new_average_rank = weighted_sum / (num_people_ranked + 1)

    return new_average_rank


if __name__ == '__main__':
    lambda_handler(event, "")
