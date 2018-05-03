//dependencies
var friends = require("../data/friends");

//routes
module.exports = function (app) {
  //friends json
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //add friends
  app.post("/api/friends", function (req, res) {
    
  });

};