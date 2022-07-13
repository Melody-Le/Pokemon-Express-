const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
