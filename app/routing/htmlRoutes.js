var express = require("express");
var path = require("path");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var HtmlRoutes = function() {
  this.app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  this.app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
};

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "survey.html"));
// });

module.exports = HtmlRoutes;
