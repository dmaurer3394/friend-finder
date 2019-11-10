var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/characters", function(req, res) {
  return res.json(friends);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log("http://localhost:" + PORT);
});
