
const { Router } = require("express");
const { authentication } = require("../Middlewere/authentic.js");
const { authorization } = require("../Middlewere/authorize.js");
const { SingupModel } = require("../Model/singupModel.js");

const blogConroller = Router();

blogConroller.post("/post/create",authentication,authorization(["customer","admin"]), async(req, res) => {
    
    let payload = req.body;
    let new_data = new SingupModel({ ...payload, key: req.body.key })
    
new_data.save()

    
    res.json({Message:"Posted successfully"})

})
blogConroller.get("/",authentication,authorization(["customer","admin"]), async(req, res) => {
    
    let payload = req.body;
    let key = req.body.key;
     let new_data=await SingupModel.find()
    
    if (!new_data) {
    res.json({message:"No data found"})
}

    
    res.json(new_data)

})
blogConroller.delete("/delete/:delete_id",authentication,authorization(["customer","admin"]), async(req, res) => {
    const { delete_id } = req.params;
    let payload = req.body;
    let key = req.body.key;
     let new_data=await SingupModel.deleteOne({key:key,_id:delete_id})
    
    if (!new_data) {
    res.json({message:"No data found"})
}

    
    res.json({message:"Deleted sucessfully"})

})


module.exports = {
    blogConroller
}