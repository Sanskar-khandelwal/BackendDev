const { colors } = require("./colors");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json(colors);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
