// Starting with the express.

const express = require("express");
const app = express();
const path = require("path");

//convention is to keep all the files in the public folder but technically you can pass in anything
// static assests are just file that server doesnot have to change
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./fakecon/index.html"));
});

app.all("*", (req, res) => {
  res.status(400).send("<h1> Page Nahi Mila </h1>");
});
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

//starting to learn about
//get
//post
