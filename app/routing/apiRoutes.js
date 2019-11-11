var express = require("express");
var path = require("path");
var friends = require("../data/friends");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/characters", function(req, res) {
  return res.json(friends);
});
