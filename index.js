require("dotenv").config();

const express = require("express");

const server = express();
server.use(express.json());

server.get("/api/users", (req, res) => {
  res.send("<h1>HELLO THERE!</h1>");
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
