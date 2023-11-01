
const {connectDB}=require("./db")
const express=require("express")
const {AuthModel}=require("./Modules/singup.js")
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("app is working")
});
app.post("/create",(req,res)=>{
    let c=req.body()

    console.log(c);
    res.send("product is created");
})
app.post("/signup",async(req,res)=>{
    const result=AuthModel.find()
    console.log(result)
     let user=req.body();

     console.log(user);
     const new_user =new AuthModel({...result,user});
     await new_user.save();
     res.send("signup successfull");
});
//


app.listen(7000,async()=>{
    try{
        await connectDB
        console.log("connected to db");
    }
    catch(err){
        console.log(err)
         console.log("failed to connect db");
    }
    console.log("running port 7000");
});