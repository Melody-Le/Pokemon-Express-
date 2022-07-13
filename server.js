const express = require("express");
const app = express();

const pokemon = require("./models/pokemon");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
