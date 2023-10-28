
const { Router } = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { AuthModel } = require('../Model/authModel');

const authController = Router();


authController.post("/signup", async(req, res) => {
    let payload = req.body;
    
    const { password } = req.body;
    var hash = bcrypt.hashSync(password, 8);
    let new_data = new AuthModel({ ...payload, password: hash });
    
await new_data.save();

    res.json({Message:"signup successfuly"});
    res.send("sing up successfull")
    console.log("user added")
});


authController.post("/login", async(req, res) => {
   
    const { password,email } = req.body;
    let user =await  AuthModel.findOne({ email });
    if (!user) {
        res.json({Message:"signup successfuly"});
    }
    let hash = user.password;
    
   
    bcrypt.compare(password, hash, async function (err, result) {
        if (err) {
           
            res.json({Message:"signup successfuly"})
        }
        var token = jwt.sign({ userID: user._id }, 'secret');
        res.json({ Message: "Log in successfully", token: token })
        
   
});
})

module.exports = {
    authController
}