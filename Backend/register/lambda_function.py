import json
import logging
import secrets
import hashlib
from datetime import datetime
from aws.dynamoDB import DynamoDB
from passlib.hash import pbkdf2_sha256

event = {
    'resource': '/register',
    'path': '/register',
    'httpMethod': 'POST',
    'headers': {
        'password': '123456'
    },
    'multiValueHeaders': {
        'password': ['123456']
    },
    'queryStringParameters': {
        'user_mail': 'johnsmith@example.com'
    },
    'multiValueQueryStringParameters': {
        'user_mail': ['johnsmith@example.com']
    },
    'pathParameters': None,
    'stageVariables': None,
    'requestContext': {
        'resourceId': 'sud8f5',
        'resourcePath': '/register',
        'httpMethod': 'POST',
        'extendedRequestId': 'Ef2hkHRgIAMFr9A=',
        'requestTime': '06/May/2023:11:18:59 +0000',
        'path': '/register',
        'accountId': '339030231570',
        'protocol': 'HTTP/1.1',
        'stage': 'test-invoke-stage',
        'domainPrefix': 'testPrefix',
        'requestTimeEpoch': 1683371939370,
        'requestId': 'fd90b734-e045-4324-a83a-7d6deb2026fd',
        'identity': {
            'cognitoIdentityPoolId': None,
            'cognitoIdentityId': None,
            'apiKey': 'test-invoke-api-key',
            'principalOrgId': None,
            'cognitoAuthenticationType': None,
            'userArn': 'arn:aws:iam::339030231570:root',
            'apiKeyId': 'test-invoke-api-key-id',
            'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
            'accountId': '339030231570',
            'caller': '339030231570',
            'sourceIp': 'test-invoke-source-ip',
            'accessKey': 'ASIAU536GZIJBXLBJF3X',
            'cognitoAuthenticationProvider': None,
            'user': '339030231570'
        },
        'domainName': 'testPrefix.testDomainName',
        'apiId': 'aej45saso5'
    },
    'body': '''{
        "user_email": "johnsmith@example.com",
        "address": "123 Main St",
        "city": "Holon",
        "country": "Israel",
        "last_visit": "2023-05-11 16:34:30",
        "password": "$pbkdf2-sha256$29000$WytlLMW49947J.T8vzeGcA$sRZlRUwFjU04qwr8VWovY4RhvFf3WOi8hebYC/fk1aw",
        "phone_number": "555-555-5555",
        "registration_date": "2023-05-11 14:38:00",
        "token": "b2bd5698c9dd5372fbf545f7a3142ea779680f9a13985a1dd5748a4f2b4efa9f",
        "user_full_name": "John Smith",
        "user_last_name": "Smith",
        "user_name": "John",
                "zip": "1234567"
    }''',
    'isBase64Encoded': False
}

# Set up logging
logger = logging.getLogger('root')
logger.setLevel(logging.INFO)
ch = logging.StreamHandler()
ch.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)

dynamo = DynamoDB('users-info')

def lambda_handler(event, context):
    # Get event data
    logger.info(f"event: {event}")

    # Check if the event contains the relevant keys
    if 'body' in event:
        user_details = json.loads(event['body'])

        # Assign values to variables
        user_name = user_details.get('user_name')
        user_mail = user_details.get('user_email')
        phone_number = user_details.get('phone_number')
        user_address = user_details.get('address')
        user_city = user_details.get('city')
        user_country = user_details.get('country')
        user_zip = user_details.get('zip')
        password = user_details.get('password')

        # Verify if the required variables are not None or empty
        if all([user_name, user_mail, phone_number, user_address, user_city, user_country, user_zip, password]):
            # Continue with the rest of your code

            # Example DynamoDB query using user_mail
            existing_user = dynamo.get_item(key_name="user_email", key_value=user_mail)

            # ...
        else:
            # Handle the case when any of the required variables are missing
            logger.error("Missing required user details")
            # ...
    else:
        # Handle the case when the event does not contain the relevant keys
        logger.error("Event does not contain the required user details")
        # ...
    # Check if user already exists in DB
    existing_user =dynamo.get_item(key_name="user_email", key_value=user_mail)
    if 'Item' in existing_user:
        logger.info(f"User {user_mail} already exists.")
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'User already exists'})
        }
    # Create a new user
    hashed_password = pbkdf2_sha256.hash(password)
    token = secrets.token_hex(16)
    hashed_token = hashlib.sha256(token.encode()).hexdigest()
    new_user_data = {
        'user_email': user_mail,
        'address': user_address,
        'city': user_city,
        'country': user_country,
        'last_visit': user_details['last_visit'],
        'password': hashed_password,
        'phone_number': phone_number,
        'registration_date': user_details['registration_date'],
        'token': hashed_token,
        'user_full_name': user_details['user_full_name'],
        'user_last_name': user_details['user_last_name'],
        'user_name': user_name,
        'zip': user_zip
    }
    
    table = dynamo.resource.Table('users-info')
    logger.info(f"Inserting new data for user {user_mail}: {new_user_data}")
    table.put_item(Item=new_user_data)
    
    
    # Return success response
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'message': 'User registered successfully'})
    }

if __name__ == '__main__':
    lambda_handler(event, "")
