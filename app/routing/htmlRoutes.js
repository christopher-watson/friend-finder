//dependencies
var path = require("path");

module.exports = function(app){
  //survey page
  app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  });

  //friends page
  app.get("/friends", function(req, res){
    res.sendFile(path.join(__dirname, '../public/friends.html'))
  });

  //default home page
  app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });
}