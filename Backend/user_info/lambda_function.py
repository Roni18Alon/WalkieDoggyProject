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
    headers = event['headers']
    # get user mail from params

    # get user password from headers
    token = headers.get('token')
    if token:
        # check from DB the relevant data
        user = dynamo.get_item_by_index(key=token)
        if user:
            user_data = user[0]
            del user_data['password']
            logger.info(f"found for token {token} the user data {user_data}")
            return responses.succeeded(message=user_data)
        else:
            return responses.failed(error=f"invalid token", status_code=404)

    else:
        return responses.failed(error=f"no token in header", status_code=404)


if __name__ == '__main__':
    lambda_handler(event, "")
