import logging
from aws.dynamoDB import DynamoDB
from responses import responses

event = {'resource': '/user-info', 'path': '/user-info', 'httpMethod': 'GET',
         'headers': {'token': '0a998a38ca06e2a9e96295bb50bc6639cb754c4c9f7ffa00de97ebe171fa62e0'},
         'multiValueHeaders': {'token': ['0a998a38ca06e2a9e96295bb50bc6639cb754c4c9f7ffa00de97ebe171fa62e0']},
         'queryStringParameters': None, 'multiValueQueryStringParameters': None, 'pathParameters': None,
         'stageVariables': None,
         'requestContext': {'resourceId': 'boe1m8', 'resourcePath': '/user-info', 'httpMethod': 'GET',
                            'extendedRequestId': 'GAeW_HpmoAMFXrA=', 'requestTime': '04/Jun/2023:18:53:58 +0000',
                            'path': '/user-info', 'accountId': '339030231570', 'protocol': 'HTTP/1.1',
                            'stage': 'test-invoke-stage', 'domainPrefix': 'testPrefix',
                            'requestTimeEpoch': 1685904838054, 'requestId': '6185e835-4e15-4869-a284-66471923e84b',
                            'identity': {'cognitoIdentityPoolId': None, 'cognitoIdentityId': None,
                                         'apiKey': 'test-invoke-api-key', 'principalOrgId': None,
                                         'cognitoAuthenticationType': None, 'userArn': 'arn:aws:iam::339030231570:root',
                                         'apiKeyId': 'test-invoke-api-key-id',
                                         'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
                                         'accountId': '339030231570', 'caller': '339030231570',
                                         'sourceIp': 'test-invoke-source-ip', 'accessKey': 'ASIAU536GZIJDHLWGK42',
                                         'cognitoAuthenticationProvider': None, 'user': '339030231570'},
                            'domainName': 'testPrefix.testDomainName', 'apiId': 'aej45saso5'}, 'body': None,
         'isBase64Encoded': False}
# set a logger
logger = logging.getLogger('root')
logger.setLevel(logging.INFO)
ch = logging.StreamHandler()
ch.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)

dynamo = DynamoDB('users-info')


def lambda_handler(event, context):
    # get event data
    logger.info(f"event: {event}")
    query = event['queryStringParameters']
    # get user mail from params
    user_mail = query.get('user_mail').lower()

    # check from DB the relevant data
    user = dynamo.get_item(key_name="user_email", key_value=user_mail)
    if user:
        user_data = user[0]
        walker_data = {'user_email': user_data['user_email'],
                       'phone_number': user_data['phone_number'],
                       'rank': user_data['rank'],
                       'user_full_name': user_data['user_full_name'],
                       'user_last_name': user_data['user_last_name'],
                       'user_name': user_data['user_name'],
                       'whatsapp_link': user_data['whatsapp_link'],
                       'zip': user_data['zip'],
                       'num_of_ranks': user_data['num_of_ranks']
                       }
        reviews = user_data.get('reviews')
        if reviews:
            walker_data['reviews'] = reviews
        else:
            walker_data['reviews'] = 'No reviews for User'

        logger.info(f"send walker data {user_mail}, the data : {walker_data}")
        return responses.succeeded(message=walker_data)
    else:
        return responses.failed(error=f"can't find user in Database", status_code=404)


if __name__ == '__main__':
    lambda_handler(event, "")
