const router = require("express").Router();
const pharmas = require("../schema/schema").pharmas;


/**
 * @api {post} /pharma/add add a pharmaceutical shop
 * @apiName add pharmaceutical shop
 * @apiGroup pharmacist
 * @apiParam {string} name name of the pharmaceutical shop
 * @apiParam {string} contact contact of the pharmaceutical shop
 * @apiParam {string} availability availability of the pharmaceutical shop
 * @apiParam {string} loc location of the pharmaceutical shop
 * 
 * @apiParamExample {json} response
 * {
    "_id": "5bb2a4566446f82217ab15c6",
    "name": "p1",
    "contact": "9923992399",
    "availability": "9 to 10",
    "loc": "yo mama's house",
    "__v": 0
}
 */
router.post("/add",(req,res,next)=>{
    pharmas.findOne({name:req.body.name})
    .then((d)=>{
        if(!d){
            pharmas.create(req.body)
            .then(u=>res.json(u))
            .catch(next);
        } else  
            res.json({message:"pharma already exists"});
    }).catch(next);
});

module.exports = router;