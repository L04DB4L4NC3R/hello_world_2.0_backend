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
    }
}));