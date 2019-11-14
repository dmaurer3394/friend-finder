// Declaring global variables
var friends = "";
var bestDifference = 100;
var bestFriend = "";

// This was added to the HTML for making a number and word value on the screen
// showing where the slider was
function updateRangeText(val, question) {
  document.getElementById("range-number" + question).innerHTML = val;
  switch (val) {
    case "1":
      $("#range-text" + question).text(" - Strongly Disagree");
      break;
    case "2":
      $("#range-text" + question).text(" - Disagree");
      break;
    case "3":
      $("#range-text" + question).text(" - Neutral");
      break;
    case "4":
      $("#range-text" + question).text(" - Agree");
      break;
    case "5":
      $("#range-text" + question).text(" - Strongly Agree");
      break;
  }
}

// Function taking difference of absolute values of two passed in arrays,
// adding the total together to ger a final 'differenceTotal' variable
function compareArrays(arrayOne, arrayTwo) {
  var differenceTotal = 0;
  for (var i = 0; i < arrayOne.length; ++i) {
    var difference = Math.abs(arrayOne[i] - arrayTwo[i]);
    differenceTotal += difference;
  }
  return differenceTotal;
}

// Clears both text fields, resets sliders, and resets number and name values
function resetAllFields() {
  document.getElementById("name").value = "";
  document.getElementById("photo").value = "";

  for (var i = 1; i < 11; i++) {
    document.getElementById("range" + i).value = 3;
  }

  for (var i = 1; i < 11; i++) {
    var newI = i.toString();
    $("#range-number" + newI).text("3");
    $("#range-text" + newI).text(" - Neutral");
  }
}

// Get request grabbing information from the 'friends.js' file
function getAllCharacters() {
  $.get("/api/characters").then(function(data) {
    friends = data;
  });
}

// Added in the HTML to disable the submit button when closing the modal
function disableSubmit() {
  $("#submit-button").prop("disabled", true);
}

// Start of on page load function
$(document).ready(function() {
  // calling API for character information
  getAllCharacters();

  // disabling button by default
  $("#submit-button").prop("disabled", true);

  // disables button when both text fields are empty
  $(".user-input").keyup(function() {
    if ($("#name").val() == "" || $("#photo").val() == "") {
      $("#submit-button").prop("disabled", true);
    } else {
      $("#submit-button").prop("disabled", false);
    }
  });

  // on click event for main GO button
  $("#submit-button").on("click", function(event) {
    event.preventDefault();

    // making new character object to compare with other friends
    // and to post to API
    var newCharacter = {
      name: $("#name")
        .val()
        .trim(),
      photo: $("#photo")
        .val()
        .trim(),
      scores: [
        $("#range1").val(),
        $("#range2").val(),
        $("#range3").val(),
        $("#range4").val(),
        $("#range5").val(),
        $("#range6").val(),
        $("#range7").val(),
        $("#range8").val(),
        $("#range9").val(),
        $("#range10").val()
      ]
    };
    resetAllFields();

    // posting new character to the API and console logging data
    $.post("/api/characters", newCharacter).then(function(data) {
      console.log("survey.html", data);
    });

    // getting a difference value for each friend when compared to current user
    for (var i = 0; i < friends.length; i++) {
      var currentDifference = compareArrays(
        newCharacter.scores,
        friends[i].scores
      );

      // setting the lowest difference value as 'best friend'
      if (currentDifference < bestDifference) {
        bestDifference = currentDifference;
        bestFriend = friends[i];
      }
    }

    // inputs friend name and photo on modal
    $("#name-div").text(bestFriend.name);
    $("#name-div").addClass("align-middle");
    $("#photo-div").html(
      "<img id='friend-photo' src='" + bestFriend.photo + "'>"
    );

    // resets difference variable and best friend object
    // then grabs all characters again after new user was added
    bestDifference = 100;
    bestFriend = "";
    getAllCharacters();
  });
});
