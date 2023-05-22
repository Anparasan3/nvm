const express = require("express");
const path = require("path");

const port = 9000;
const app = express();

app.use("/", (req, res) => {
  const file = path.join(__dirname, "nvm.sh");
  // const file = path.join(__dirname, "index.html");
  // res.sendFile(file)
  res.setHeader("Content-Type", "text/html");
  res.sendFile(file)
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});