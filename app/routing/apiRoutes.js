// var express = require("express");
var friends = require("../data/friends");

// var app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

module.exports = function(app) {
  app.get("/api/characters", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/characters", function(req, res) {
    console.log("POST TEST");
    // var newCharacter = req.body;
    // console.log(newCharacter);
    // friends.push(newCharacter);
    // res.json(newCharacter);
  });
};
