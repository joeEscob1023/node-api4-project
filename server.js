const express = require("express");
const User = require("./users/users-model.js");
const server = express();

server.use(express.json());

server.get("/users", async (req, res) => {
  //User.find();
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: "Error Getting Users",
      err: err.message,
    });
  }
});

server.post("/users", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        message: "Please provide username and password for the user",
      });
    } else {
      const newUser = await User.insert({ username, password });
      res.status(201).json(newUser);
    }
  } catch (err) {
    res.status(400).json({
      message: "error creating user",
      err: err.message,
    });
  }
});

module.exports = server;
