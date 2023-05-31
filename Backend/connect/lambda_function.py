import json
import logging
from aws.dynamoDB import DynamoDB
from responses import responses
from datetime import datetime

event = {'resource': '/connect', 'path': '/connect', 'httpMethod': 'POST', 'headers': None, 'multiValueHeaders': None,
         'queryStringParameters': {'user_mail': 'ronialon2008@gmail.com'},
         'multiValueQueryStringParameters': {'user_mail': ['ronialon2008@gmail.com']}, 'pathParameters': None,
         'stageVariables': None,
         'requestContext': {'resourceId': 'v03ks6', 'resourcePath': '/connect', 'httpMethod': 'POST',
                            'extendedRequestId': 'Fv2aSEv1IAMF-Dw=', 'requestTime': '30/May/2023:17:50:44 +0000',
                            'path': '/connect', 'accountId': '339030231570', 'protocol': 'HTTP/1.1',
                            'stage': 'test-invoke-stage', 'domainPrefix': 'testPrefix',
                            'requestTimeEpoch': 1685469044735, 'requestId': 'be9211b9-dcc2-4195-bb42-7f60d5d62ffd',
                            'identity': {'cognitoIdentityPoolId': None, 'cognitoIdentityId': None,
                                         'apiKey': 'test-invoke-api-key', 'principalOrgId': None,
                                         'cognitoAuthenticationType': None, 'userArn': 'arn:aws:iam::339030231570:root',
                                         'apiKeyId': 'test-invoke-api-key-id',
                                         'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
                                         'accountId': '339030231570', 'caller': '339030231570',
                                         'sourceIp': 'test-invoke-source-ip', 'accessKey': 'ASIAU536GZIJOPPXE6NY',
                                         'cognitoAuthenticationProvider': None, 'user': '339030231570'},
                            'domainName': 'testPrefix.testDomainName', 'apiId': 'aej45saso5'},
         'body': '{\n"user_to_connect":"matan.neyman@gmail.com"\n}\n', 'isBase64Encoded': False}

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
    query = event['queryStringParameters']
    # get user mail from params
    user_mail = query.get('user_mail').lower()

    user = dynamo.get_item(key_name="user_email", key_value=user_mail)
    try:
        if event.get("body") and user:
            logged_user_data = user[0]
            logger.info(f"found user {logged_user_data['user_email']}")
            body = json.loads(event["body"])
            user_to_connect_mail = body.get("user_to_connect")  # the user mail we want to connect
            user_to_connect = dynamo.get_item(key_name="user_email", key_value=user_to_connect_mail)
            if user_to_connect:
                user_to_connect = user_to_connect[0]
                logger.info(f"found user {user_to_connect['user_email']}")

                update_connection(logged_user_data, user_to_connect['user_email'])
                logger.info(
                    f"update connection from user {logged_user_data['user_email']} to {user_to_connect['user_email']}")
                update_connection(user_to_connect, logged_user_data['user_email'])
                logger.info(
                    f"update connection from user {user_to_connect['user_email']} to {logged_user_data['user_email']}")
                return responses.succeeded(message="successful updated connection for both users")

        return responses.failed(error=f"can't complete operation", status_code=400)
    except Exception as e:
        # Handle the case when any of the required variables are missing
        logger.error(f"exception {e}")
        return responses.failed(error=f"error", status_code=404)


def update_connection(user_data, user_to_connect):
    recent_connections = user_data.get("recent_connections", [])
    # need to export data about user we want to connect to
    new_connection_list = list()

    # check for duplication
    for connection in recent_connections:
        if connection['connected_user'] == user_to_connect:
            logger.info(f"user exists")
        else:
            new_connection_list.append(connection)

    connect_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    connection_data = {'connection_time': connect_time, 'connected_user': user_to_connect}
    new_connection_list.append(connection_data)
    sorted_connection_list = sorted(new_connection_list,
                                    key=lambda x: datetime.strptime(x['connection_time'], '%Y-%m-%d %H:%M:%S'),
                                    reverse=True)
    user_data['recent_connections'] = sorted_connection_list
    logger.info(f"update user data {user_data['user_email']} with role {user_data['user_role']} with data {user_data}")
    dynamo.insert_item(item=user_data)


if __name__ == '__main__':
    lambda_handler(event, "")
