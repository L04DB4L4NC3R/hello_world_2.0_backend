const router = require("express").Router();
const users = require("../schema/schema").users;
const request = require("request");
const {
    existsOrNot
} = require("helpers");


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
    existsOrNot("jack")
    .then(()=>{
        let ins={
            timestamp = req.body.timestamp,
            loc:data.body.loc,
            obj:req.body.query,
            found:false
        }
        users.updateOne({name:"jack"},{$push:{items:ins}})
        .then((u)=>res.json(s))
        .catch(next);
    })
    .catch(next);
});