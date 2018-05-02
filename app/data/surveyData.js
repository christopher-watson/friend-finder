//did not finish
//1. collect form data for comparison
//2. compare user array to each friend array
//3. using math.val find absolute value of array differences at each position
//4. get sum of the numbers that arent the same for user and friend array - set as totalDifference
//5. Display user with nearest sum in modal
//6. 

var friends = require("./friends");

require("./app/routing/survey")(app);

$(".submit").on("click", function(event) {
  event.preventDefault();

  var scoreArray = []
  function grabScores(){
    for (var i = 1; i < 10; i++){
      scoreArray.push($("#ques"+i).val().trim())
    }
  }

  // Here we grab the form elements
  var newFriend = {
    name: $("#friend-name").val().trim(),
    photo: $("#friend-photo").val().trim(),
    // scores:  
  };

  console.log(newFriend);

  $.post("/api/tables", newFriend,
    function(data) {


    });

});


