import json
import logging
from datetime import datetime
from aws.dynamoDB import DynamoDB
from responses import responses
from dateutil.relativedelta import relativedelta


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
                               'X-Forwarded-Proto': ['https']},
         'queryStringParameters': {'user_mail': 'ronialon2008@gmail.com'},
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
         'body': '{"dog_name":"mini","dog_breed":"shitzo","dog_weight":"23","dog_gender":"male","dog_birthday":"12-10-2011","free_text":"","spayed":"True","rabies_vaccinated":"True","human_friendly":"True","dog_friendly":"True"}',
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
    # get user mail from params
    user_mail = event['queryStringParameters'].get("user_mail").lower()

    if event.get("body"):
        dog_details = json.loads(event["body"])
        # Assign values to variables
        dog_name = dog_details.get('dog_name').lower()
        dog_breed = dog_details.get('dog_breed').lower()
        dog_weight = dog_details.get('dog_weight')
        dog_gender = dog_details.get('dog_gender').lower()
        dog_birthday = dog_details.get('dog_birthday')
        free_text = dog_details.get('free_text', "").lower()
        spayed = bool(dog_details.get('spayed').lower())
        rabies_vaccinated = bool(dog_details.get('rabies_vaccinated').lower())
        human_friendly = bool(dog_details.get('human_friendly').lower())
        dog_friendly = bool(dog_details.get('dog_friendly').lower())

        # check if user exists
        user = dynamo.get_item(key_name="user_email", key_value=user_mail)
        if user:
            user_data = user[0]
            dog_data = {
                'dog_name': dog_name,
                'dog_breed': dog_breed,
                'dog_weight': dog_weight,
                'dog_gender': dog_gender,
                'dog_birthday': dog_birthday,
                'dog_age': str(calculate_age(datetime.strptime(dog_birthday, "%d-%m-%Y").date())),
                "free_text": free_text,
                "spayed": spayed,
                "rabies_vaccinated": rabies_vaccinated,
                "human_friendly": human_friendly,
                "dog_friendly": dog_friendly
            }

            dogs_list = user_data.get('dogs', [])
            # add dog to the list
            verified = check_duplication_in_list(dogs_list, dog_name, dog_birthday)
            if verified:
                dogs_list.append(dog_data)
                user_data['dogs'] = dogs_list
                logger.info(f"Inserting new data of dog  {dog_data} to user {user_mail}.all data : {user_data}")
                dynamo.insert_item(item=user_data)
                # Return success response
                return responses.succeeded(message="insert new dog completed")
            else:
                logger.error(f"dog already exists for this user")
                return responses.failed(error=f"dog {dog_name} already exists for this user", status_code=404)

        else:
            # Handle the case when any of the required variables are missing
            logger.error(f"can't find user {user_mail} in system")
            return responses.failed(error=f"can't find user {user_mail} in system", status_code=404)
    else:
        # Handle the case when the event does not contain the relevant keys
        logger.error("Event does not contain the required user details")
        return responses.failed(error=f"didn't get body in request", status_code=400)


def calculate_age(date_of_birth):
    today = datetime.today().date()
    age_delta = relativedelta(today, date_of_birth)
    age_decimal = age_delta.years + age_delta.months / 12
    age_decimal_rounded = round(age_decimal, 1)
    return age_decimal_rounded


def check_duplication_in_list(given_list, dog_name, dog_birthday):
    seen = set()
    seen.add((dog_name, dog_birthday))
    for item in given_list:
        item_key = (item['dog_name'], item['dog_birthday'])
        if item_key in seen:
            return False
        else:
            seen.add(item_key)
    return True


if __name__ == '__main__':
    lambda_handler(event, "")
