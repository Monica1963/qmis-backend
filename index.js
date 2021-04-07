const express = require("express");
const app = express();
const logger = require("morgan");
const compression = require("compression");
//const bodyParser = require("body-parser");
const path = require("path");

const dotenv = require("dotenv");

dotenv.config();

app.use(compression());
app.use(express.json());
app.use(logger("dev"));

app.set("port", process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, "../frontend/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "index.html"));
});

// app.use(express.static("./public"));

app.listen(app.get("port"), function () {
  console.log(`Servidor iniciado en ${app.get("port")}`);
});
