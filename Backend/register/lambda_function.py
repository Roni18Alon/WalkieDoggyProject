import requests
import simplejson
import json
import logging
import secrets
import hashlib
from datetime import datetime
from aws.dynamoDB import DynamoDB
from passlib.hash import pbkdf2_sha256
from aws.s3 import S3
from responses import responses
import base64

event = {'resource': '/register', 'path': '/register', 'httpMethod': 'POST',
         'headers': {'accept': '/', 'accept-encoding': 'gzip, deflate, br', 'accept-language': 'en-US,en;q=0.9',
                     'content-type': 'application/json', 'Host': 'aej45saso5.execute-api.us-east-1.amazonaws.com',
                     'origin': 'http://localhost:3000', 'referer': 'http://localhost:3000/',
                     'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
                     'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"Windows"', 'sec-fetch-dest': 'empty',
                     'sec-fetch-mode': 'cors', 'sec-fetch-site': 'cross-site',
                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
                     'X-Amzn-Trace-Id': 'Root=1-64614286-27809c76657a173b50064282', 'X-Forwarded-For': '93.172.169.19',
                     'X-Forwarded-Port': '443', 'X-Forwarded-Proto': 'https'},
         'multiValueHeaders': {'accept': ['/'], 'accept-encoding': ['gzip, deflate, br'],
                               'accept-language': ['en-US,en;q=0.9'], 'content-type': ['application/json'],
                               'Host': ['aej45saso5.execute-api.us-east-1.amazonaws.com'],
                               'origin': ['http://localhost:3000'], 'referer': ['http://localhost:3000/'],
                               'sec-ch-ua': ['"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"'],
                               'sec-ch-ua-mobile': ['?0'], 'sec-ch-ua-platform': ['"Windows"'],
                               'sec-fetch-dest': ['empty'], 'sec-fetch-mode': ['cors'],
                               'sec-fetch-site': ['cross-site'], 'User-Agent': [
                 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'],
                               'X-Amzn-Trace-Id': ['Root=1-64614286-27809c76657a173b50064282'],
                               'X-Forwarded-For': ['93.172.169.19'], 'X-Forwarded-Port': ['443'],
                               'X-Forwarded-Proto': ['https']}, 'queryStringParameters': {'user_role': 'DogOwner'},
         'multiValueQueryStringParameters': {'user_role': ['DogOwner']}, 'pathParameters': None, 'stageVariables': None,
         'requestContext': {'resourceId': '937d4w', 'resourcePath': '/register', 'httpMethod': 'POST',
                            'extendedRequestId': 'E7dVCFS6oAMFb4w=', 'requestTime': '14/May/2023:20:20:22 +0000',
                            'path': '/prod/register', 'accountId': '339030231570', 'protocol': 'HTTP/1.1',
                            'stage': 'prod', 'domainPrefix': 'aej45saso5', 'requestTimeEpoch': 1684095622394,
                            'requestId': 'a5546aae-364b-4f3a-92ad-721d4734dc1a',
                            'identity': {'cognitoIdentityPoolId': None, 'accountId': None, 'cognitoIdentityId': None,
                                         'caller': None, 'sourceIp': '93.172.169.19', 'principalOrgId': None,
                                         'accessKey': None, 'cognitoAuthenticationType': None,
                                         'cognitoAuthenticationProvider': None, 'userArn': None,
                                         'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
                                         'user': None}, 'domainName': 'aej45saso5.execute-api.us-east-1.amazonaws.com',
                            'apiId': 'aej45saso5'},
         'body': '{"user_email":"gb_test@example.com","address":"blalala 20","city":"blala","country":"Israel","password":"123456","phone_number":"555-555-5555","user_name":"Ben haim","zip":"1234567"}',
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
api_key = 'AIzaSyAMtdGhYZfpWVoO45JBPghp2GOK4yLuFl4'
s3_bucket = S3(bucket_name='walkie-doggy-users')


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
        image_b64 = user_details.get('user_image')
        # if uploaded image save in s3-optional
        if image_b64:
            # dog_image = convert_to_base64(dog_image_b64)
            key = f"{user_mail}_img.png"
            image_bytes = base64.b64decode(image_b64)
            s3_bucket.upload_image(img=image_bytes, key=key)
        if user_address and user_city and user_country:
            full_address = f"{user_address}, {user_city}, {user_country}"
            if not get_coordinates(full_address):
                return responses.failed(error=f"Wrong address inserted, please register again", status_code=406)


        # Verify if the required variables are not None or empty
        if all([user_name, user_mail, phone_number, user_address, user_city, user_country, user_zip, password]):
            existing_user = dynamo.get_item(key_name="user_email", key_value=user_mail)
            if existing_user:
                return responses.failed(error=f"User {user_mail} already exists.", status_code=402)
            hashed_password = pbkdf2_sha256.hash(password)
            token = secrets.token_hex(16)
            hashed_token = hashlib.sha256(token.encode()).hexdigest()

            # edit phone number
            phone_number = phone_number.replace("-", "")
            new_phone_number = "972" + phone_number[1:]

            new_user_data = {
                'user_email': user_mail.lower(),
                'address': user_address.lower(),
                'city': user_city.lower(),
                'country': user_country.lower(),
                'last_visit': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'first_visit': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'password': hashed_password,
                'phone_number': new_phone_number,
                'registration_date': datetime.now().strftime('%Y-%m-%d'),
                'token': hashed_token,
                'user_full_name': f'{user_name.lower()} {user_last_name.lower()}',
                'user_name': user_name.lower(),
                'user_last_name': user_last_name.lower(),
                'zip': user_zip,
                'user_role': role.lower(),
                'rank': 0,
                'num_of_ranks': 0,
                'whatsapp_link': f'https://api.whatsapp.com/send?phone={new_phone_number}'
            }
            if image_b64:
                new_user_data['user_image'] = f'http://walkie-doggy-users.s3-website-us-east-1.amazonaws.com/{key}'

            table = dynamo.resource.Table('users-info')
            logger.info(f"Inserting new data for user {user_mail}: {new_user_data}")
            table.put_item(Item=new_user_data)
            del new_user_data['password']
            # Return success response
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Set-Cookie': f"walkieDoggy={hashed_token}"
                },
                'body': simplejson.dumps({"body": new_user_data}, use_decimal=True)
            }

        else:
            # Handle the case when any of the required variables are missing
            logger.error("Missing required user details")
            return responses.failed(error=f"didn't get body in request", status_code=400)
    else:
        # Handle the case when the event does not contain the relevant keys
        logger.error("Event does not contain the required user details")
        return responses.failed(error=f"didn't get body in request", status_code=400)


def get_coordinates(full_address):
    try:
        api_endpoint = 'https://maps.googleapis.com/maps/api/geocode/json'
        params = {'address': full_address, 'key': api_key}
        response = requests.get(api_endpoint, params=params)
        response_json = response.json()
        if response_json['status'] == 'OK' and not response_json.get('results')[0].get('partial_match'):
            result = response_json['results'][0]
            geometry = result['geometry']
            location = geometry['location']
            latitude = location['lat']
            longitude = location['lng']
            logger.info("Address has been verified, it's legit")
            return True
        else:
            logger.error("Wrong address given")
            return False

    except Exception as e:
        logger.error("Event does not contain correct address")
        return False



if __name__ == '__main__':
    lambda_handler(event, "")
