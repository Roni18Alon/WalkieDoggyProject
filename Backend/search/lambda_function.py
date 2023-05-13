# import json
# import logging
# import secrets
# import hashlib
# from datetime import datetime
# from aws.dynamoDB import DynamoDB
# from responses import responses
# from passlib.hash import pbkdf2_sha256
#
# event = {'resource': '/login', 'path': '/login', 'httpMethod': 'POST', 'headers': {'password': '123456'},
#          'multiValueHeaders': {'password': ['123456']},
#          'queryStringParameters': {'user_mail': 'ronialon2008@gmail.com'},
#          'multiValueQueryStringParameters': {'user_mail': ['ronialon2008@gmail.com']}, 'pathParameters': None,
#          'stageVariables': None,
#          'requestContext': {'resourceId': 'sud8f5', 'resourcePath': '/login', 'httpMethod': 'POST',
#                             'extendedRequestId': 'Ef2hkHRgIAMFr9A=', 'requestTime': '06/May/2023:11:18:59 +0000',
#                             'path': '/login', 'accountId': '339030231570', 'protocol': 'HTTP/1.1',
#                             'stage': 'test-invoke-stage', 'domainPrefix': 'testPrefix',
#                             'requestTimeEpoch': 1683371939370, 'requestId': 'fd90b734-e045-4324-a83a-7d6deb2026fd',
#                             'identity': {'cognitoIdentityPoolId': None, 'cognitoIdentityId': None,
#                                          'apiKey': 'test-invoke-api-key', 'principalOrgId': None,
#                                          'cognitoAuthenticationType': None, 'userArn': 'arn:aws:iam::339030231570:root',
#                                          'apiKeyId': 'test-invoke-api-key-id',
#                                          'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
#                                          'accountId': '339030231570', 'caller': '339030231570',
#                                          'sourceIp': 'test-invoke-source-ip', 'accessKey': 'ASIAU536GZIJBXLBJF3X',
#                                          'cognitoAuthenticationProvider': None, 'user': '339030231570'},
#                             'domainName': 'testPrefix.testDomainName', 'apiId': 'aej45saso5'}, 'body': None,
#          'isBase64Encoded': False}
#
# # set a logger
# logger = logging.getLogger('root')
# logger.setLevel(logging.INFO)
# ch = logging.StreamHandler()
# ch.setLevel(logging.INFO)
# formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
# ch.setFormatter(formatter)
# logger.addHandler(ch)
#
# dynamo = DynamoDB('users-info')


import boto3
import requests

dynamodb = boto3.resource('dynamodb')
api_key = 'AIzaSyAMtdGhYZfpWVoO45JBPghp2GOK4yLuFl4'
table_name = 'users-info'
index_name = 'token-index'

event = {'user_email': 'orbadani6@gmail.com'}

def lambda_handler(event, context):
    user_email = event['user_email']

    try:
        table = dynamodb.Table(table_name)

        response = table.query(
            KeyConditionExpression='user_email = :user_email',
            ExpressionAttributeValues={
                ':user_email': user_email
            }
        )

        items = response['Items']
        if len(items) > 0:
            item = items[0]
            address = item['address']
            city = item['city']
            country = item['country']

            location_string = f"{address}, {city}, {country}"

            # Call the function to translate location_string to latitude and longitude coordinates using the Google Maps API
            coordinates = translate_to_coordinates(location_string)

            # Process the coordinates as needed
            latitude = coordinates['latitude']
            longitude = coordinates['longitude']

            # ...rest of your code...

            return {
                'statusCode': 200,
                'body': 'Success'
            }
        else:
            print(f"No item found for user_email: {user_email}")
            return {
                'statusCode': 404,
                'body': 'Not Found'
            }
    except Exception as e:
        print('Error querying DynamoDB:', str(e))
        return {
            'statusCode': 500,
            'body': 'Error'
        }

def translate_to_coordinates(location_string):
    # Make an HTTP request to the Google Maps Geocoding API to translate location to coordinates
    try:
        api_endpoint = 'https://maps.googleapis.com/maps/api/geocode/json'
        params = {
            'address': location_string,
            'key': api_key
        }

        response = requests.get(api_endpoint, params=params)
        response_json = response.json()

        if response_json['status'] == 'OK':
            result = response_json['results'][0]
            geometry = result['geometry']
            location = geometry['location']

            latitude = location['lat']
            longitude = location['lng']

            return {
                'latitude': latitude,
                'longitude': longitude
            }
        else:
            print('Error translating location to coordinates:', response_json['status'])
            return None
    except Exception as e:
        print('Error translating location to coordinates:', str(e))
        return None

if __name__ == '__main__':
    lambda_handler(event, "")

