

const mongoose = require("mongoose");

const AuthSchema =new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role:{type:String,  enum:["customer",'admin']  ,  default:'customer'}
});
const AuthModel=mongoose.model("reg", AuthSchema);


module.exports = {
    AuthModel
};