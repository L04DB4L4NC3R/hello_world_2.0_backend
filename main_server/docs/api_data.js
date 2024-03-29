define({ "api": [
  {
    "type": "post",
    "url": "/doctor/add",
    "title": "add a doctor",
    "name": "add_doctor",
    "group": "doctor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the doctor</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "specialization",
            "description": "<p>specialization of the doctor</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact",
            "description": "<p>contact of the doctor</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the doctor</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loc",
            "description": "<p>location of the doctor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response",
          "content": "{\n    \"rating\": 0.5,\n    \"_id\": \"5bb29fcdb8c82c20538ca188\",\n    \"name\": \"doccroc\",\n    \"specialization\": \"gynaecologist\",\n    \"contact\": \"9923992399\",\n    \"availability\": \"9 to 10\",\n    \"loc\": \"yo mama's house\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doctor.js",
    "groupTitle": "doctor"
  },
  {
    "type": "post",
    "url": "/doctor/presc",
    "title": "send a prescription",
    "name": "send_a_prescription",
    "group": "doctor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "doctor",
            "description": "<p>name of the doctor</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "presc",
            "description": "<p>prescription of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response",
          "content": "{\n    \"complimentary_users\": [],\n    \"_id\": \"5bb28943956e1d16a1372c65\",\n    \"name\": \"angad\",\n    \"age\": 19,\n    \"gender\": \"M\",\n    \"items\": [\n        {\n            \"_id\": \"5bb2919b0f87c71a01f96db1\",\n            \"timestamp\": \"sfdjnfs\",\n            \"loc\": \"sadsjdjbsad\",\n            \"obj\": \"bag\",\n            \"found\": false\n        }\n    ],\n    \"prescriptions\": [\n        {\n            \"_id\": \"5bb2af7c73810426177ba4e5\",\n            \"doctor\": \"doccroc\",\n            \"presc\": \"paracetamol\"\n        }\n    ],\n    \"__v\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doctor.js",
    "groupTitle": "doctor"
  },
  {
    "type": "post",
    "url": "/pharma/add",
    "title": "add a pharmaceutical shop",
    "name": "add_pharmaceutical_shop",
    "group": "pharmacist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the pharmaceutical shop</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact",
            "description": "<p>contact of the pharmaceutical shop</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the pharmaceutical shop</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loc",
            "description": "<p>location of the pharmaceutical shop</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response",
          "content": "{\n    \"_id\": \"5bb2a4566446f82217ab15c6\",\n    \"name\": \"p1\",\n    \"contact\": \"9923992399\",\n    \"availability\": \"9 to 10\",\n    \"loc\": \"yo mama's house\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/pharma.js",
    "groupTitle": "pharmacist"
  },
  {
    "type": "post",
    "url": "/user/deleteItem",
    "title": "delete an item",
    "name": "delete_an_item",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "obj",
            "description": "<p>object to delete</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/doctor/find",
    "title": "find doctors",
    "name": "find_doctors",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "spec",
            "description": "<p>specialization of the doctor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response",
          "content": "[\n    {\n        \"rating\": 0.5,\n        \"_id\": \"5bb29fcdb8c82c20538ca188\",\n        \"name\": \"doccroc\",\n        \"specialization\": \"gynaecologist\",\n        \"contact\": \"9923992399\",\n        \"availability\": \"9 to 10\",\n        \"loc\": \"yo mama's house\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doctor.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/find",
    "title": "find object",
    "name": "find_object",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "obj",
            "description": "<p>object you are looking for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response",
          "content": "{\n    \"_id\": \"5bb2852280452113f2c816f2\",\n    \"timestamp\": \"12/12/12 8:00 pm\",\n    \"loc\": \"{lat:12.12334,lng:13.5678}\",\n    \"obj\": \"watch\",\n    \"found\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/found",
    "title": "object found",
    "name": "object_found",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "obj",
            "description": "<p>the name of the item</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>the name of the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/query",
    "title": "save query",
    "name": "save_query",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "timestamp",
            "description": "<p>when was the photo clicked</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loc",
            "description": "<p>location of the item</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "obj",
            "description": "<p>the name of the item</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>the name of the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "save user",
    "name": "save_user",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response",
          "content": "{\n    \"complimentary_users\": [],\n    \"_id\": \"5bb28943956e1d16a1372c65\",\n    \"name\": \"angad\",\n    \"age\": 19,\n    \"gender\": \"M\",\n    \"items\": [],\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/orderPharma",
    "title": "send order to pharmacist",
    "name": "send_order_to_pharmacist",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "doctor",
            "description": "<p>doctor</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "presc",
            "description": "<p>prescription data</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pharma",
            "description": "<p>pharmacist name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response",
          "content": "{\n    \"orders\": [\n        {\n            \"_id\": \"5bb2b383691e3227a80358e9\",\n            \"user\": \"angad\",\n            \"doctor\": \"doccroc\",\n            \"presc\": \"paracetamol\"\n        }\n    ],\n    \"_id\": \"5bb2a4566446f82217ab15c6\",\n    \"name\": \"p1\",\n    \"contact\": \"9923992399\",\n    \"availability\": \"9 to 10\",\n    \"loc\": \"yo mama's house\",\n    \"__v\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/query",
    "title": "takes query and convert to minimal token",
    "name": "takes_query_and_convert_to_minimal_token",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "obj",
            "description": "<p>the sententual query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response",
          "content": "{\n    \"_id\": \"5bb2852280452113f2c816f2\",\n    \"timestamp\": \"12/12/12 8:00 pm\",\n    \"loc\": \"{lat:12.12334,lng:13.5678}\",\n    \"obj\": \"watch\",\n    \"found\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documents.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/profile",
    "title": "to upload and objectify file",
    "name": "to_upload_and_objectify_photo",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photo",
            "description": "<p>base64 encoded file</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loc",
            "description": "<p>location of the object</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp of the object</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/documents.js",
    "groupTitle": "user"
  }
] });
