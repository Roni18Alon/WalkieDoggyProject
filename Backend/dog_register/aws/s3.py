import logging
import boto3

logger = logging.getLogger("main")


class S3:

    def __init__(self, bucket_name):
        self.resource = boto3.resource('s3', region_name="us-east-1")
        self.client = boto3.client('s3', region_name="us-east-1")
        self.bucket_name = bucket_name

    def upload_image(self, img, key):
        try:
            self.client.put_object(Bucket=self.bucket_name, Key=key, Body=img)
        except Exception as e:
            logger.error(f"cloud not upload image to bucket {self.bucket_name}. {e}")
