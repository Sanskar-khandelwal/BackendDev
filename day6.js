const { colors } = require("./colors");

const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.json(colors);
// });

app.get("/", (req, res) => {
  res.send('<h1> Home page </h1> <a href="/api/colors">colors</a>');
});

app.get("/api/colors", (req, res) => {
  const newColors = colors.map((id) => {
    const { color, value } = id;
    return { color, value };
  });
  res.json(newColors);
});

app.get("/api/colors/1", (req, res) => {
  console.log(colors);
  const singleColor = colors.find((single) => single.id == "1");
  console.log(singleColor);
  res.json(singleColor);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
