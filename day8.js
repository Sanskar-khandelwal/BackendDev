// Middleware: middleware are everywhere in express, we can say that express is made of bunch of middlewares stuffed together, Middleware are the functions that execute between the request to the server. each middleware has the access to req and res object.
// Prolly the middleware the heart of the express

const express = require("express");
const app = express();

// req => middleware => res 
// you have to always call next middleware or you have to send the respond and terminate the cycle
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next(); 
}

app.get('/', logger,  (req, res)=> {
res.send("this is The home");

})
app.get('/about', (req, res)=> {
res.send("this is The about");
})

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
