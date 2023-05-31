import json
import logging
from aws.dynamoDB import DynamoDB
from responses import responses
from datetime import datetime

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
    query = event['queryStringParameters']
    # get user mail from params
    user_mail = query.get('user_mail').lower()
    # get user password from headers
    logger.info(f"user mail :{user_mail}")

    # check from DB the relevant data
    # check if user exists - if not return 403
    user = dynamo.get_item(key_name="user_email", key_value=user_mail)
    try:
        if user:
            user_data = user[0]
            user_recent_connections = user_data['recent_connections']

            recent_connection = list()
            # get data for only 10 recent connections
            for connection in user_recent_connections[:10]:
                connection_mail = connection.get('connected_user')
                data = dynamo.get_item(key_name="user_email", key_value=connection_mail)
                if data:
                    rank = data[0].get('rank', 0)
                    connection['rank'] = rank
                    recent_connection.append(connection)

            logger.info(f"send recent connection {recent_connection}")
            return responses.succeeded(message=recent_connection)

        else:
            # Handle the case when any of the required variables are missing
            logger.error(f"can't find user {user_mail} in system")
            return responses.failed(error=f"can't find user {user_mail} in system", status_code=404)
    except Exception as e:
        return responses.failed(error=f"exception {e}", status_code=404)


if __name__ == '__main__':
    lambda_handler(event, "")
