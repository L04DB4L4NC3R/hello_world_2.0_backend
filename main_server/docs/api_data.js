define({ "api": [
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
            "field": "query",
            "description": "<p>the name of the item</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "user"
  }
] });
