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

//now there goes a slide section that will cover {event loop, async patterns, events emitter and streams} to get more knowledge on this kindly use the docs
// to check all the examples code of async function head over to course-api.com

// using promise to read file
const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

//Done with the day 3, Will learn about async and await now
