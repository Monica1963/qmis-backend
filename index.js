const express = require("express");
const app = express();
const logger = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

app.use(compression());
app.use(bodyParser.json());
app.use(logger("dev"));

app.get("/", (req, res) => {
  console.log("Hi desde el endpoint");
  res.sendStatus(200);
});

// app.use(express.static("./public"));

app.listen(3000);
