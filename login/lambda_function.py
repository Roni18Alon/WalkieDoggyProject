import boto3
import logging

event = {'resource': '/login', 'path': '/login', 'httpMethod': 'POST', 'headers': {'password': '1234567'},
         'multiValueHeaders': {'password': ['1234567']},
         'queryStringParameters': {'user_mail': 'ronialon2008@gmail.com'},
         'multiValueQueryStringParameters': {'user_mail': ['ronialon2008@gmail.com']}, 'pathParameters': None,
         'stageVariables': None,
         'requestContext': {'resourceId': 'sud8f5', 'resourcePath': '/login', 'httpMethod': 'POST',
                            'extendedRequestId': 'Ef2hkHRgIAMFr9A=', 'requestTime': '06/May/2023:11:18:59 +0000',
                            'path': '/login', 'accountId': '339030231570', 'protocol': 'HTTP/1.1',
                            'stage': 'test-invoke-stage', 'domainPrefix': 'testPrefix',
                            'requestTimeEpoch': 1683371939370, 'requestId': 'fd90b734-e045-4324-a83a-7d6deb2026fd',
                            'identity': {'cognitoIdentityPoolId': None, 'cognitoIdentityId': None,
                                         'apiKey': 'test-invoke-api-key', 'principalOrgId': None,
                                         'cognitoAuthenticationType': None, 'userArn': 'arn:aws:iam::339030231570:root',
                                         'apiKeyId': 'test-invoke-api-key-id',
                                         'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
                                         'accountId': '339030231570', 'caller': '339030231570',
                                         'sourceIp': 'test-invoke-source-ip', 'accessKey': 'ASIAU536GZIJBXLBJF3X',
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


def lambda_handler(event, context):
    # get event data
    logger.info(f"event: {event}")
    query = event['queryStringParameters']
    headers = event['headers']
    # get user mail from params
    user_mail = query.get('user_mail')
    # get user password from headers
    password = headers.get('password')
    logger.info(f"user mail :{user_mail} user password {password}")

    # check from DB the relevant data


    print("hi")


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    lambda_handler(event, "")

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
