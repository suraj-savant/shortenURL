const express = require("express");
const { ShortenUrlModel } = require("../db");
const { generateShortUrl, urlValidator } = require("../utils");
const Router = express.Router();

// api route http://localhost:3000/api/v1/
Router.get("/", (req, res) => {
  res.redirect("https://www.google.com");
});

// api route http://localhost:3000/api/v1/shorturl
Router.post("/shorturl", async (req, res) => {
  const { success } = urlValidator.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Invalid url",
    });
  }
  const shortenKey = generateShortUrl(req.body.url);

  const urlExist = await ShortenUrlModel.findOne({
    shortenKey,
  });

  if (urlExist) {
    return res.status(200).json({url : urlExist.shortenKey});
  }

  const shortenUrlRsp = await ShortenUrlModel.create({
    url: req.body.url,
    shortenKey,
  });

  if (!shortenUrlRsp) {
    return res.status(513).json({
      message: "Internal error occurred",
    });
  }

  res.status(200).json({url : shortenUrlRsp.shortenKey});
});

// get data based on key http://localhost:3000/api/v1/redirect/:key
Router.get("/redirect/:key", async (req, res) => {
  const shortenKey = req.params.key;

  const data = await ShortenUrlModel.findOne({
    shortenKey,
  });
  if (!data) {
    res.status(400).json({
      message: "Url doesn't exist",
    });
  }
  
  res.status(200).json({
    url: data.url
  });
});

module.exports = Router;
