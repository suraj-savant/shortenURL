const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.MONGODB_URL)
.then((conn)=>console.log("Db connection sucessful"))
.catch((err)=> console.log("Error in  db connetcion" + err));

const shorturlSchema = new mongoose.Schema({
    url : String,
    shortenKey : String
})

const ShortenUrlModel = mongoose.model("ShortenUrl", shorturlSchema);


module.exports = {ShortenUrlModel};

