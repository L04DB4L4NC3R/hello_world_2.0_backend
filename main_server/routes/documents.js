/**
 * @api {post} /query takes query and convert to minimal token
 * @apiName takes query and convert to minimal token
 * @apiGroup user
 * @apiParam {string} obj the sententual query
 * @apiParamExample {json} response
 * {
    "_id": "5bb2852280452113f2c816f2",
    "timestamp": "12/12/12 8:00 pm",
    "loc": "{lat:12.12334,lng:13.5678}",
    "obj": "watch",
    "found": false
}   
 */



 /**
  * @api {post} /profile to upload and objectify file
  * @apiName to upload and objectify photo
  * @apiGroup user
  * @apiParam {string} file base64 encoded file
  * @apiParam {string} loc location of the object
  * @apiParam {string} timestamp timestamp of the object
  * @apiParam {string} name name of the user
  */