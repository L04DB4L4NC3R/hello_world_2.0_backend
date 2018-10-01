require("dotenv").config();
const express = require("express");
const bp = require("body-parser");
require("morgan")("dev");
const mongoose = require("mongoose");

const app = express();

app.use(bp.json()); app.use(bp.urlencoded({extended:false}));
app.use(express.static('docs'));
mongoose.connect(process.env.MONGOURL,{useNewUrlParser:true},(err,metadata)=>{
    if(err)
        console.log("error");
    else    
        console.log("Connected to database")
});



app.get("/",(req,res)=>{
    res.json({message:"hi"});
});

app.get("/docs",(req,res)=>{
    res.sendFile(path.join(__dirname,"docs/index.html"));
})


app.use("/user",require("./routes/user"));

app.use((err,req,res,next)=>{
    res.json({message:"Error occurred",err});
});

const server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening in port ${server.address().port}`));
