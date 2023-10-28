
const mongoose=require("mongoose");
//const { SingUpModel } = require("../../../auth/Models/singup")

const modSchema=mongoose.Schema({
   Title:String,
   Category:String,
   Author:String,
   Content:String
});

const SingupModel=mongoose.model("blog",modSchema);

module.exports={SingupModel};
// Title - For Example : “My Journey at MasaI”,
// Category - For Example : “Career”/”Finance”/”Travel”/”Sports” etc.
// Author - For Example : “Albert”/”Manish”/”Santhi”/”Bob” etc.
// Content - For Example : “A paragraph of content….etc”
// Image(Optional) - Any related image for that blog.