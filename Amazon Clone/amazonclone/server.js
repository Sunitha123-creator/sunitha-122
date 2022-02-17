const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://sunitha:sunitha@cluster0.zizx7.mongodb.net/UserAuthentication?retryWrites=true&w=majority")

app.use("/",require("./routes/newRoute"));

app.listen(3001,function(){
    console.log("express server is running on port 3001");
})