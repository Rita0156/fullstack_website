
const express=require("express")
const {connection}=require("./confing/db.js");

const {authController}=require("./Routs/authRout.js");
const {blogConroller}=require("./Routs/blogRout.js");
require('dotenv').config();
const Port=process.env.PORT||3030

const app=express();
app.use(express.json());
app.get("/", (req, res) => {
    
    res.send("Homepage.........");
});

var cors = require('cors');
app.use(cors());
app.use("/", authController);
app.use("/blog",blogConroller);





app.listen(Port,async()=>{
 try{
     await connection
     console.log("Connected to db");
 }
 catch(err){
    console.log("failed to connect");
    console.log(err);
    
 };
 console.log("running port 7500");
 
 
});