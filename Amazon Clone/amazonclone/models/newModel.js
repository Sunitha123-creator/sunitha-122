const mongoose = require("mongoose");

const newSchema ={
    firstname:String,
    lastname:String,
    username:String,
    password:String

}
const New = mongoose.model("New",newSchema);
module.exports = New;