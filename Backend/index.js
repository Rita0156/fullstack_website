
const {connectDB}=require("./db")
const express=require("express")
const {AuthModel}=require("./Modules/singup")
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("app is working")
});
app.post("/signup",async (req,res)=>{
     let payload=req.body();
     console.log(payload);
     const new_user=new AuthModel(payload);
     await new_user.save();
     res.send("signup successfull");
});
//


app.listen(7000,async()=>{
    try{
        await connectDB
        console.log("connected to db")
    }
    catch(err){
         console.log("failed to connect db")
    }
    console.log("running port 7000")
});