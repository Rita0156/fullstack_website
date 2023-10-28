

const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role:{type:String,  enum:["customer",'admin']  ,  default:'customer'}
});
const AuthModel=mongoose.model("user", AuthSchema);


module.exports = {
    AuthModel
};