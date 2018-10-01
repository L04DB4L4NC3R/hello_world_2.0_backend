require("dotenv").config();
const express = require("express");
const bp = require("body-parser");
require("morgan")("dev");
const mongoose = require("mongoose");

const app = express();

app.use(bp.json()); app.use(bp.urlencoded({extended:false}));

mongoose.connect(process.env.MONGOURL,{useNewUrlParser:true},(err,metadata)=>{
    if(err)
        console.log("error");
    else    
        console.log("Connected to database")
});


app.get("/",(req,res)=>{
    res.json({message:"hi"});
});

const server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening in port ${server.address().port}`));
