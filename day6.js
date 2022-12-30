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

// setting up a route parameter
app.get("/api/colors/:colorId", (req, res) => {
  const { colorId } = req.params;
  const singleColor = colors.find((single) => single.id == Number(colorId));
  // console.log(singleColor);
  if (!singleColor) {
    return res.status(404).send("<h1>Product does not exist</h1>");
  }
  return res.json(singleColor);
});

app.get("/api/proudcts/1");

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
