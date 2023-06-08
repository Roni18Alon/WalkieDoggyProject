import logging
import boto3
from boto3.dynamodb.conditions import Key, Attr

logger = logging.getLogger("main")


class DynamoDB:

    def __init__(self, table_name):
        self.resource = boto3.resource('dynamodb', region_name="us-east-1")
        self.client = boto3.resource('dynamodb', region_name="us-east-1")
        self.table = self.resource.Table(table_name)
        self.table_name = table_name

    def get_table(self):
        return self.table

    def get_item(self, key_name, key_value):
        try:
            response = self.table.query(KeyConditionExpression=Key(key_name).eq(key_value))
            return response["Items"]
        except Exception as e:
            logger.info(f"can't get item from dynamo {e}")

    def insert_item(self, item):
        try:
            response = self.table.put_item(
                Item=item
            )
        except Exception as e:
            logger.info(f"can't insert item to dynamo {e}")

    def get_item_by_index(self, key):
        try:
            response = self.table.query(
                IndexName='token-index',
                KeyConditionExpression=Key('token').eq(key)
            )
            return response['Items']
        except Exception as e:
            logger.info(f"can't insert item to dynamo {e}")
