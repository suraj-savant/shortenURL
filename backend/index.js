const express = require("express");
const path = require('path');
const urlRouter = require("./routes/shorturl");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

// Serve the frontend static files
app.use(express.static(path.join(__dirname, 'dist')));


app.use("/api/v1/", urlRouter);


// Serve index.html for all unknown routes (for SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});


app.listen(PORT, ()=>console.log("Server running on port " + PORT));