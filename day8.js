const logger = require("./logger.js");
const authorize = require("./authorize.js");

// Middleware: middleware are everywhere in express, we can say that express is made of bunch of middlewares stuffed together, Middleware are the functions that execute between the request to the server. each middleware has the access to req and res object.
// Prolly the middleware the heart of the express.

const express = require("express");
const app = express();

// req => middleware => res
// you have to always call next middleware or you have to send the respond and terminate the cycle

// app.use passes the middleware function to all the methods,if we don't use app.use then we have to manually pass the middleware to all the methods.
// app.use(logger);
// we can also add path to the app.use function
// app.use("/api", logger);

// using more than one middleware functions
app.use([authorize, logger]);
//This wil be executed in order

// this will apply to all the methods starting with /api for ex /api/into/about
app.get("/", (req, res) => {
  res.send("this is The home");
});

app.get("/about", (req, res) => {
  res.send("this is The about");
});

app.get("/api/colors", (req, res) => {
  res.send("this is The Colors");
});

app.get("/api/items", (req, res) => {
  res.send("this is The items ");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
