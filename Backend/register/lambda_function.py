import json
import logging
import secrets
import hashlib
from datetime import datetime
from aws.dynamoDB import DynamoDB
from passlib.hash import pbkdf2_sha256
from responses import responses

event = {'resource': '/register', 'path': '/register', 'httpMethod': 'POST', 'headers': None, 'multiValueHeaders': None,
         'queryStringParameters': {'user_role': 'walker'}, 'multiValueQueryStringParameters': {'user_role': ['walker']},
         'pathParameters': None, 'stageVariables': None,
         'requestContext': {'resourceId': '937d4w', 'resourcePath': '/register', 'httpMethod': 'POST',
                            'extendedRequestId': 'E7Q1TFP4oAMF5tw=', 'requestTime': '14/May/2023:18:55:04 +0000',
                            'path': '/register', 'accountId': '339030231570', 'protocol': 'HTTP/1.1',
                            'stage': 'test-invoke-stage', 'domainPrefix': 'testPrefix',
                            'requestTimeEpoch': 1684090504091, 'requestId': '6abc9231-24bf-4457-9fcd-c5f8560aeedb',
                            'identity': {'cognitoIdentityPoolId': None, 'cognitoIdentityId': None,
                                         'apiKey': 'test-invoke-api-key', 'principalOrgId': None,
                                         'cognitoAuthenticationType': None, 'userArn': 'arn:aws:iam::339030231570:root',
                                         'apiKeyId': 'test-invoke-api-key-id',
                                         'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
                                         'accountId': '339030231570', 'caller': '339030231570',
                                         'sourceIp': 'test-invoke-source-ip', 'accessKey': 'ASIAU536GZIJPSLDQSAV',
                                         'cognitoAuthenticationProvider': None, 'user': '339030231570'},
                            'domainName': 'testPrefix.testDomainName', 'apiId': 'aej45saso5'},
         'body': '{\r\n    "user_email": "gb@example.com",\r\n    "address": "123 Main St",\r\n    "city": "Holon",\r\n    "country": "Israel",\r\n    "password": "123456",\r\n    "phone_number": "555-555-5555",\r\n    "user_last_name": "Guy",\r\n    "user_name": "Ben haim",\r\n    "zip": "1234567"\r\n}',
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
    role = event['queryStringParameters'].get("user_role")
    # Check if the event contains the relevant keys
    if 'body' in event and event.get("body"):
        user_details = json.loads(event["body"])

        # Assign values to variables
        user_name = user_details.get('user_name')
        user_mail = user_details.get('user_email')
        user_last_name = user_details.get('user_last_name')
        phone_number = user_details.get('phone_number')
        user_address = user_details.get('address')
        user_city = user_details.get('city')
        user_country = user_details.get('country')
        user_zip = user_details.get('zip')
        password = user_details.get('password')

        # Verify if the required variables are not None or empty
        if all([user_name, user_mail, phone_number, user_address, user_city, user_country, user_zip, password]):
            existing_user = dynamo.get_item(key_name="user_email", key_value=user_mail)
            if existing_user:
                return responses.failed(error=f"User {user_mail} already exists.", status_code=400)
            hashed_password = pbkdf2_sha256.hash(password)
            token = secrets.token_hex(16)
            hashed_token = hashlib.sha256(token.encode()).hexdigest()
            new_user_data = {
                'user_email': user_mail.lower(),
                'address': user_address.lower(),
                'city': user_city.lower(),
                'country': user_country.lower(),
                'last_visit': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'first_visit': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'password': hashed_password,
                'phone_number': phone_number,
                'registration_date': datetime.now().strftime('%Y-%m-%d'),
                'token': hashed_token,
                'user_full_name': f'{user_name.lower()} {user_last_name.lower()}',
                'user_name': user_name.lower(),
                'user_last_name': user_last_name.lower(),
                'zip': user_zip,
                'user_role': role.lower()
            }

            table = dynamo.resource.Table('users-info')
            logger.info(f"Inserting new data for user {user_mail}: {new_user_data}")
            table.put_item(Item=new_user_data)

            # Return success response
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Set-Cookie': f"walkieDoggy={hashed_token}"
                },
                'body': json.dumps({'message': 'User registered successfully'})
            }

        else:
            # Handle the case when any of the required variables are missing
            logger.error("Missing required user details")
            return responses.failed(error=f"didn't get body in request", status_code=400)
    else:
        # Handle the case when the event does not contain the relevant keys
        logger.error("Event does not contain the required user details")
        return responses.failed(error=f"didn't get body in request", status_code=400)


if __name__ == '__main__':
    lambda_handler(event, "")
