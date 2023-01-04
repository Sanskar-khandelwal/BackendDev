// Learning about get, post, put, delete

const express = require("express");
const app = express();

//middleware to get the static assets
app.use(express.static("./methods-static"));

// Middleware for parse form data, or collecting the form data
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { profession } = req.body;
  if (profession) {
    return res.send(`Hello, We know you are good at ${profession}`);
  }
  res.send("<h1>Please provide the proper credentioals </h1>");
});

app.listen(5000, () => {
  console.log("listening on port number 5000");
});
