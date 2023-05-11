import json
import logging
import secrets
import hashlib
from datetime import datetime
from aws.dynamoDB import DynamoDB
from responses import responses
from passlib.hash import pbkdf2_sha256

event = {'resource': '/login', 'path': '/login', 'httpMethod': 'POST', 'headers': {'password': '123456'},
         'multiValueHeaders': {'password': ['123456']},
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

dynamo = DynamoDB('users-info')


def lambda_handler(event, context):
    # get event data
    logger.info(f"event: {event}")
    query = event['queryStringParameters']
    headers = event['headers']
    # get user mail from params
    user_mail = query.get('user_mail').lower()
    # get user password from headers
    password = headers.get('password')
    logger.info(f"user mail :{user_mail} user password {password}")

    # check from DB the relevant data
    # check if user exists - if not return 403
    user = dynamo.get_item(key_name="user_email", key_value=user_mail)
    if user:
        user_data = user[0]
        logger.info(f"user {user_mail} exists with data {user_data}")
        logger.info(f"checking password validation for user ")

        # check password validation
        if validate_password(password, user_data):
            logger.info("Password is correct!")

            # hash the token using SHA-256
            token = secrets.token_hex(16)
            hashed_token = hashlib.sha256(token.encode()).hexdigest()

            # update dynamo with current data
            user_new_data = user_data
            user_new_data['last_visit'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            user_new_data['token'] = hashed_token
            logger.info(f"insert new data for user {user_mail} the data {user_new_data}")
            dynamo.insert_item(item=user_new_data)
            # return data with new cookie
            return {
                'statusCode': 200,
                'headers': {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Set-Cookie': f"walkieDoggy={hashed_token}"
                },
                'body': json.dumps('login in done')
            }

        else:
            logger.info("Password is incorrect.")
            return responses.failed(error="password is incorrect", status_code=403)

    else:
        return responses.failed(error=f"can't find user {user_mail}", status_code=403)


def validate_password(password, user_data):
    hashed_password_from_db = user_data.get("password")
    if pbkdf2_sha256.verify(password, hashed_password_from_db):
        return True


if __name__ == '__main__':
    lambda_handler(event, "")
