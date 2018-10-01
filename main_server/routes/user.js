const router = require("express").Router();
const {
    users,
    pharmas
} = require("../schema/schema");
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
    console.log(req.body)
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



/**
 * @api {post} /user/sendPharma send order to pharmacist
 * @apiName send order to pharmacist
 * @apiGroup user
 * @apiParam {string} user user
 * @apiParam {string} doctor doctor
 * @apiParam {string} presc prescription data
 * @apiParam {string} pharma pharmacist name
 * 
 * @apiParamExample {json} response
 * {
    "orders": [
        {
            "_id": "5bb2b383691e3227a80358e9",
            "user": "angad",
            "doctor": "doccroc",
            "presc": "paracetamol"
        }
    ],
    "_id": "5bb2a4566446f82217ab15c6",
    "name": "p1",
    "contact": "9923992399",
    "availability": "9 to 10",
    "loc": "yo mama's house",
    "__v": 1
}
 */
router.post("/sendPharma",(req,res,next)=>{
    pharmas.findOne({name:req.body.pharma})
    .then((p)=>{
        if(!p)
            next(new Error("Pharma not found"));
        p.orders.push({
            user:req.body.user,
            doctor:req.body.doctor,
            presc:req.body.presc
        });
        p.save().then(pp=>res.json(pp)).catch(next);
    });
});
module.exports = router;