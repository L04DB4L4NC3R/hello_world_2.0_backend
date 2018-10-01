require("dotenv").config();
const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bp.json()); app.use(bp.urlencoded({extended:false}));
app.use(express.static('docs'));
app.use(require("morgan")("dev"));
mongoose.connect(process.env.MONGOURL,{useNewUrlParser:true});
mongoose.connection.once("open",()=>console.log("Connected to mongodb"))
.on("error",()=>console.log("error connecting to db"));



app.get("/",(req,res)=>{
    res.json({message:"hi"});
});

app.get("/docs",(req,res)=>{
    res.sendFile(path.join(__dirname,"docs/index.html"));
})


app.use("/user",require("./routes/user"));
app.use("/doctor",require("./routes/doctor"));
app.use("/pharma",require("./routes/pharma"));

app.use((err,req,res,next)=>{
    res.json({message:"Error occurred",err});
});

const server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening in port ${server.address().port}`));
