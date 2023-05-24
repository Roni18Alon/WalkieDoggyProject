import json
import logging
import secrets
import hashlib
from datetime import datetime
from aws.dynamoDB import DynamoDB
from responses import responses
from passlib.hash import pbkdf2_sha256

event = {'resource': '/login', 'path': '/login', 'httpMethod': 'POST', 'headers':
    {'accept': '*/*', 'accept-encoding': 'gzip, deflate, br', 'accept-language': 'en-US,en;q=0.9', 'Host': 'aej45saso5.execute-api.us-east-1.amazonaws.com', 'origin': 'http://localhost:3000','password':'123456', 'referer': 'http://localhost:3000/', 'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"Windows"', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'no-cors', 'sec-fetch-site': 'cross-site', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36', 'X-Amzn-Trace-Id': 'Root=1-6463c7d7-0f973f464e583fba60d8ba5a', 'X-Forwarded-For': '93.172.169.19', 'X-Forwarded-Port': '443', 'X-Forwarded-Proto': 'https'}, 'multiValueHeaders': {'accept': ['*/*'], 'accept-encoding': ['gzip, deflate, br'], 'accept-language': ['en-US,en;q=0.9'], 'Host': ['aej45saso5.execute-api.us-east-1.amazonaws.com'], 'origin': ['http://localhost:3000'], 'referer': ['http://localhost:3000/'], 'sec-ch-ua': ['"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"'], 'sec-ch-ua-mobile': ['?0'], 'sec-ch-ua-platform': ['"Windows"'], 'sec-fetch-dest': ['empty'], 'sec-fetch-mode': ['no-cors'], 'sec-fetch-site': ['cross-site'], 'User-Agent': ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'], 'X-Amzn-Trace-Id': ['Root=1-6463c7d7-0f973f464e583fba60d8ba5a'], 'X-Forwarded-For': ['93.172.169.19'], 'X-Forwarded-Port': ['443'], 'X-Forwarded-Proto': ['https']}, 'queryStringParameters': {'user_mail': 'ronialon2008@gmail.com'}, 'multiValueQueryStringParameters': {'user_mail': ['ronialon2008@gmail.com']}, 'pathParameters': None, 'stageVariables': None, 'requestContext': {'resourceId': 'sud8f5', 'resourcePath': '/login', 'httpMethod': 'POST', 'extendedRequestId': 'FBwpuHUkoAMFh0A=', 'requestTime': '16/May/2023:18:13:43 +0000', 'path': '/prod/login', 'accountId': '339030231570', 'protocol': 'HTTP/1.1', 'stage': 'prod', 'domainPrefix': 'aej45saso5', 'requestTimeEpoch': 1684260823551, 'requestId': '95c3d832-bc8f-483b-bda5-6877f5c9a87d', 'identity': {'cognitoIdentityPoolId': None, 'accountId': None, 'cognitoIdentityId': None, 'caller': None, 'sourceIp': '93.172.169.19', 'principalOrgId': None, 'accessKey': None, 'cognitoAuthenticationType': None, 'cognitoAuthenticationProvider': None, 'userArn': None, 'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36', 'user': None}, 'domainName': 'aej45saso5.execute-api.us-east-1.amazonaws.com', 'apiId': 'aej45saso5'}, 'body': None, 'isBase64Encoded': False}

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
            user_new_data['last_visit'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
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
                'body': json.dumps(user_new_data)
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

