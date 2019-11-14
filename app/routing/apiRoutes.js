var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/characters", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/characters", function(req, res) {
    console.log("===== POSTING... =====");
    var newCharacter = req.body;
    console.log(newCharacter);
    friends.push(newCharacter);
    res.json(newCharacter);
  });
};
