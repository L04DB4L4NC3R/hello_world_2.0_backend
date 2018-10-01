const router = require("express").Router();
const users = require("../schema/schema").users;
const {
    existsOrNot
} = require("../helpers/generic");


/**
 * @api {post} /user/query save query
 * @apiName save query
 * @apiGroup user
 * 
 * @apiParam {string} timestamp when was the photo clicked
 * @apiParam {string} loc location of the item
 * @apiParam {string} obj the name of the item
 * @apiParam {string} name the name of the user
 */
router.post("/query",(req,res,next)=>{

    existsOrNot(req.body.name)
    .then(()=>{
        let ins={
            timestamp:req.body.timestamp,
            loc:req.body.loc,
            obj:req.body.obj,
            found:false
        };
        users.updateOne({name:req.body.name},{$push:{items:ins}})
        .then((u)=>res.json(u))
        .catch(next);
    })
    .catch(d=>res.send(d));
});




/**
 * @api {post} /user/find find object
 * @apiName find object
 * @apiGroup user
 * 
 * @apiParam {string} name name of the user
 * @apiParam {string} obj object you are looking for
 * 
 * @apiParamExample {json} response
 * {
    "_id": "5bb2852280452113f2c816f2",
    "timestamp": "12/12/12 8:00 pm",
    "loc": "{lat:12.12334,lng:13.5678}",
    "obj": "watch",
    "found": false
}   
 */
router.post("/find",(req,res,next)=>{
    users.findOne({name:req.body.name,'items.obj':req.body.obj/*{$elemMatch:req.body.obj}*/})
    .then((d)=>{
        if(!d)
            next(new Error("No records found"));
        if(!d.items[0].found)
            res.json(d.items[0]);
        else
            res.json({message:"This item has already been found"});
    })
    .catch(next);
});



/**
 * @api {post} /user/add save user
 * @apiName save user
 * @apiGroup user
 * 
 * @apiParam {string} name name of the user
 * @apiParam {Number} age age of the user
 * @apiParam {string} gender gender of the user
 * 
 * @apiParamExample {json} response
 * {
    "complimentary_users": [],
    "_id": "5bb28943956e1d16a1372c65",
    "name": "angad",
    "age": 19,
    "gender": "M",
    "items": [],
    "__v": 0
}
 */
router.post("/add",(req,res,next)=>{
    users.findOne({name:req.body.name})
    .then((d)=>{
        if(!d){
            users.create({
                name:req.body.name,
                age:req.body.age,
                gender:req.body.gender
            }).then((u)=>res.json(u))
            .catch(next);
        } else  
            res.json({message:"User already exists"});
    });
});



/**
 * @api {post} /user/found object found
 * @apiName object found
 * @apiGroup user

 * @apiParam {string} obj the name of the item
 * @apiParam {string} name the name of the user
 */
router.post("/found",(req,res,next)=>{
    users.findOne({name:req.body.name,'items.obj':req.body.obj})
    .then((d)=>{
        if(!d)
            next(new Error("No records found"));
        d.items[0].found = true;
        d.save()
        .then(()=>res.json({message:"record updated successfully"}))
        .catch(next);
    }).catch(()=>next(new Error("Error finding data")));
});

module.exports = router;