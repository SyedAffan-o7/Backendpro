require("dotenv").config();
const express = require("express");
const app = express();
const port = 3300;

app.get("/", (req, res) => {
  res.send("<h1>hel ffo</h1>");
});

app.get("/Greet", (req, res) => {
  res.send("<h1>hey there ;-> </h1>");
});
app.listen(process.env.PORT, () => {
  console.log("connected at" + " " + port);
});
