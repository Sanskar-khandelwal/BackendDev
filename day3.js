// Actually Day 3 was meant to be learning about read and write file async way, but I already knew that stuff I only watched it again and not coded along.

//Day 3 Starts here
// HTTP module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello this is the home page");
  } else if (req.url === "/about") {
    res.end("Hello there, this is the about page");
  }
  // Setting a page that does not exist
  res.end(`These page donot exist`);
});

server.listen(5000);
