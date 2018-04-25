//dependencies
var friends = require("../data/friends");

//routes
module.exports = function (app) {
  //print all friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //add friends
  app.post("/api/friends", function (req, res) {
    friends.push(req.body);
    console.log(req.body);
  });

  //clear friends
  app.post("/api/clear", function () {
    friends = [];
    console.log(friends);
  });

};