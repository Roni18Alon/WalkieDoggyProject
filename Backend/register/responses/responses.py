import simplejson
import logging

logger = logging.getLogger("main")


def succeeded(filtered_samples):
    # remove Send Count from the results
    result = {"body": filtered_samples}
    status_code = 200
    return _return_response(status_code, simplejson.dumps(result, use_decimal=True))


def failed(error, status_code):
    result = {"message": error}
    return _return_response(status_code, simplejson.dumps(result, use_decimal=True))


def _return_response(status_code, body):
    logger.info(f"returning status code {status_code}, body: {body}")
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        "body": body
    }
