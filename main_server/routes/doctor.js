const router = require("express").Router();
const {
    doctors,
    users
} = require("../schema/schema");


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



/**
 * @api {post} /doctor/find find doctors
 * @apiName find doctors
 * @apiGroup user
 * @apiParam {string} spec specialization of the doctor
 * 
 * @apiParamExample {json} response
 * [
    {
        "rating": 0.5,
        "_id": "5bb29fcdb8c82c20538ca188",
        "name": "doccroc",
        "specialization": "gynaecologist",
        "contact": "9923992399",
        "availability": "9 to 10",
        "loc": "yo mama's house",
        "__v": 0
    }
]
 */
router.post("/find",(req,res,next)=>{
    doctors.find({specialization:req.body.spec})
    .sort('rating')
    .exec((err,data)=>{
        if(err)
            next(err);
        res.json(data);
    });
});


/**
 * @api {post} /doctor/presc send a prescription
 * @apiName send a prescription
 * @apiGroup doctor
 * @apiParam {string} doctor name of the doctor
 * @apiParam {string} user name of the user
 * @apiParam {string} presc prescription of the user
 * 
 * @apiParamExample {json} response
 * {
    "complimentary_users": [],
    "_id": "5bb28943956e1d16a1372c65",
    "name": "angad",
    "age": 19,
    "gender": "M",
    "items": [
        {
            "_id": "5bb2919b0f87c71a01f96db1",
            "timestamp": "sfdjnfs",
            "loc": "sadsjdjbsad",
            "obj": "bag",
            "found": false
        }
    ],
    "prescriptions": [
        {
            "_id": "5bb2af7c73810426177ba4e5",
            "doctor": "doccroc",
            "presc": "paracetamol"
        }
    ],
    "__v": 1
}
 * 
 */
router.post("/presc",(req,res,next)=>{
    users.findOne({name:req.body.name})
    .then((u)=>{
        if(!u)
            next(new Error("User not found"));
        u.prescriptions.push({
            doctor:req.body.doctor,
            presc:req.body.presc
        });
        u.save().then(d=>res.json(d)).catch(next);
    }).catch(next);
});
module.exports = router;