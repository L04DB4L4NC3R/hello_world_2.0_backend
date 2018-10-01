const mongoose = require("mongoose");

module.exports.users = mongoose.model("user",new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    complimentary_users:[String],
    items:{
        type:[{
            timestamp:String,
            loc:String,
            obj:String,
            found:Boolean
        }],
        default:[]
    },
    prescriptions:{
        type:[{
            doctor:String,
            presc:String
        }],
        default:[]
    }
}));


module.exports.doctors = mongoose.model("doctor",new mongoose.Schema({
    name:String,
    specialization:String,
    contact:String,
    rating:{
        type:Number,
        default:0.5
    },
    availability:String,
    loc:String
}));    



module.exports.pharmas = mongoose.model("pharma",new mongoose.Schema({
    name:String,
    loc:String,
    contact:String,
    availability:String
}));

