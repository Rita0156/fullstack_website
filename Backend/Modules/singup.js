

const mongoose = require("mongoose");

const authSchema =new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role:{type:String,  enum:["customer",'admin']  ,  default:'customer'}
});
const AuthModel=mongoose.model("reg", authSchema);


module.exports = {
    AuthModel
};