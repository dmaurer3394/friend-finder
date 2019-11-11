var express = require("express");
var path = require("path");
// var friends = require("./app/public/front-end");
// import { friends } from "./app/public/front-end.js";

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));
// app.use(express.static("app/routing"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/characters", function(req, res) {
  return res.json(friends);
});

app.post("/api/characters", function(req, res) {
  console.log("POST TEST");
  var newCharacter = req.body;
  console.log(newCharacter);
  friends.push(newCharacter);
  res.json(newCharacter);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log("http://localhost:" + PORT);
});
