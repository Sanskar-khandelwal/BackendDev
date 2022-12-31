// starting with query string parameters which are also called as route params
//sending the small amount of information to the server using the URL
const { colors } = require("./colors");

const express = require("express");
const app = express();

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedColors = [...colors];
  if (search) {
    sortedColors = sortedColors.filter((color) => {
      return color.color.startsWith(search);
    });
  }
  if (limit) {
    sortedColors = sortedColors.slice(0, Number(limit));
  }
  if (sortedColors.length < 1) {
    return res
      .status(200)
      .send(
        "<h1> There is no color in this category / No product matched your search </h1>"
      );
  }
  res.status(200).json(sortedColors); 
});

app.listen(5000, () => {
  console.log("server is listening on port number 5000");
});
