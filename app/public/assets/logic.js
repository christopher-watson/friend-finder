function clearFields() {
  $("#name").val("");
  $("#photo").val("");
  $("#ques1").val("");
  $("#ques2").val("");
  $("#ques3").val("");
  $("#ques4").val("");
  $("#ques5").val("");
  $("#ques6").val("");
  $("#ques7").val("");
  $("#ques8").val("");
  $("#ques9").val("");
  $("#ques10").val("");
};

function findBestMatch() {
  var match = {
    name: "",
    photo: "",
    friendDifference: 500
  };

  var friendData = newFriend;
  var friendScores = newFriend.scores;
  var totalDifference;

  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDifference = 0;

    console.log(currentFriend.name);

    for (var j = 0; j < currentFriend.scores.length; j++) {
      var currentFriendScore = currentFriend.scores[j];
      var newFriendScore = newfriendScores[j];

      totalDifference += Math.abs(parseInt(currentFriendScore) - parseInt(newFriendScore));
    }

    if (totalDifference <= bestMatch.friendDifference) {
      bestMatch.name = currentFriend.name;
      bestMatch.photo = currentFriend.photo;
      bestMatch.friendDifference = totalDifference;
    }
  }

  friends.push(friendData);
  res.json(bestMatch);
  $.confirm({
    backgroundDismiss: true, // this will close the modal
    title: 'Found a Friend!',
    content: `${bestMatch.name } + ${bestMatch.photo}`
  });
};
$(".submit").on("click", function (event) {
  event.preventDefault();
  console.log("SUBMITTED");
  $.confirm({
    backgroundDismiss: true, // this will close the modal
    title: 'Found a Friend!',
    content: `${bestMatch.name } + ${bestMatch.photo}`
  });
  // var newFriend = {
  //   name: $("#name").val().trim(),
  //   photo: $("#photo").val().trim(),
  //   scores: [
  //     $("#ques1").val(),
  //     $("#ques2").val(),
  //     $("#ques3").val(),
  //     $("#ques4").val(),
  //     $("#ques5").val(),
  //     $("#ques6").val(),
  //     $("#ques7").val(),
  //     $("#ques8").val(),
  //     $("#ques9").val(),
  //     $("#ques10").val()
  //   ]
  // };

  // console.log(newFriend);
  // findBestMatch();
  // // clearFields();
  // $.post("/api/friends", function (data) {
  //   newFriend;
  // });
});