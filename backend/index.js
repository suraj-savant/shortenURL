const express = require("express");
const urlRouter = require("./routes/shorturl");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/", urlRouter);


app.listen(PORT, ()=>console.log("Server running on port " + PORT));