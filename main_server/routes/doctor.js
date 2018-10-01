const router = require("express").Router();
const doctors = require("../schema/schema").doctors;


/**
 * @api {post} /doctor/add add a doctor
 * @apiName add doctor
 * @apiGroup doctor
 * @apiParam {string} name name of the doctor
 * @apiParam {string} specialization specialization of the doctor
 * @apiParam {string} contact contact of the doctor
 * @apiParam {string} availability availability of the doctor
 * @apiParam {string} loc location of the doctor
 * 
 * @apiParamExample {json} response
 * {
    "rating": 0.5,
    "_id": "5bb29fcdb8c82c20538ca188",
    "name": "doccroc",
    "specialization": "gynaecologist",
    "contact": "9923992399",
    "availability": "9 to 10",
    "loc": "yo mama's house",
    "__v": 0
}
 */
router.post("/add",(req,res,next)=>{
    doctors.findOne({name:req.body.name})
    .then((d)=>{
        if(!d){
            doctors.create(req.body)
            .then(u=>res.json(u))
            .catch(next);
        } else  
            res.json({message:"doctor already exists"});
    }).catch(next);
});

module.exports = router;