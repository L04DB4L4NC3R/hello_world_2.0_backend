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
 * @apiParam {string} query the name of the item
 */
router.post("/query",(req,res,next)=>{
    existsOrNot(req.body.name)
    .then(()=>{
        let ins={
            timestamp:req.body.timestamp,
            loc:req.body.loc,
            obj:req.body.query,
            found:false
        };
        users.updateOne({name:req.body.name},{$push:{items:ins}})
        .then((u)=>res.json(s))
        .catch(next);
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

module.exports = router;