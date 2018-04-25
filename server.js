//dependencies
var express = require("express");
var bodyParser = require("body-parser");

//port
var PORT = process.env.PORT || 8000;

//server
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//route
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});