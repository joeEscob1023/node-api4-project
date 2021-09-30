require("dotenv").config();

const express = require("express");

const server = require("./server");
server.use(express.json());

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
