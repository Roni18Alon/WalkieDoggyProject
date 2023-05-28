import json
import logging
from aws.dynamoDB import DynamoDB
from responses import responses

event = {'resource': '/register', 'path': '/register', 'httpMethod': 'POST',
         'headers': {'accept': '*/*', 'accept-encoding': 'gzip, deflate, br', 'accept-language': 'en-US,en;q=0.9',
                     'content-type': 'application/json', 'Host': 'aej45saso5.execute-api.us-east-1.amazonaws.com',
                     'origin': 'http://localhost:3000', 'referer': 'http://localhost:3000/',
                     'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
                     'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '"Windows"', 'sec-fetch-dest': 'empty',
                     'sec-fetch-mode': 'cors', 'sec-fetch-site': 'cross-site',
                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
                     'X-Amzn-Trace-Id': 'Root=1-64614286-27809c76657a173b50064282', 'X-Forwarded-For': '93.172.169.19',
                     'X-Forwarded-Port': '443', 'X-Forwarded-Proto': 'https'},
         'multiValueHeaders': {'accept': ['*/*'], 'accept-encoding': ['gzip, deflate, br'],
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
         'body': '{"user_email":"gb@example.com","address":"123 Main St","city":"Holon","country":"Israel","password":"123456","phone_number":"555-555-5555","user_name":"Ben haim","zip":"1234567"}',
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
    # get event data
    logger.info(f"event: {event}")
    query = event['queryStringParameters']
    # get user mail from params
    user_mail = query.get('user_mail').lower()
    # Check if the event contains the relevant keys
    if event.get("body"):
        user_details = json.loads(event["body"])

        # Assign values to variables
        user_name = user_details.get('user_name')
        user_last_name = user_details.get('user_last_name')
        phone_number = user_details.get('phone_number')
        user_address = user_details.get('address')
        user_city = user_details.get('city')
        user_country = user_details.get('country')
        user_zip = user_details.get('zip')

        user_data = dynamo.get_item(key_name="user_email", key_value=user_mail)
        if user_data:
            new_user_data = user_data[0]
            if phone_number:
                new_user_data['phone_number'] = phone_number.replace("-", "")
            if user_address:
                new_user_data['address'] = user_address.lower()
            if user_city:
                new_user_data['city'] = user_city.lower()
            if user_country:
                new_user_data['country'] = user_country.lower()
            if user_zip:
                new_user_data['zip'] = user_zip.lower()

            logger.info(f"Inserting new data for user {user_mail}: {new_user_data}")
            dynamo.insert_item(item=new_user_data)
            del new_user_data['password']
            # Return success response
            return responses.succeeded(message=user_data)

        else:
            # Handle the case when any of the required variables are missing
            logger.error(f"can't find user {user_mail}")
            return responses.failed(error=f"didn't find user {user_mail}", status_code=400)
    else:
        # Handle the case when the event does not contain the relevant keys
        logger.error("Event didn't get Body ")
        return responses.failed(error=f"didn't get proper body in request", status_code=404)


if __name__ == '__main__':
    lambda_handler(event, "")
