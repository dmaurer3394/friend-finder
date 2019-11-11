var friends = [
  {
    name: "BoJack Horseman",
    photo: "../public/images/bojack-horseman.png",
    scores: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
  },
  {
    name: "Diane Nguyen",
    photo: "../public/images/diane-nguyen.png",
    scores: [5, 4, 3, 2, 1]
  },
  {
    name: "Mr. Peanutbutter",
    photo: "../public/images/mr-peanutbutter.png",
    scores: []
  },
  {
    name: "Princess Carolyn",
    photo: "../public/images/princess-carolyn.png",
    scores: []
  },
  {
    name: "Todd Chavez",
    photo: "../public/images/todd-chavez.png",
    scores: []
  },
  {
    name:
      "Hollyhock Manheim-Mannheim-Guerrero-Robinson-Zilberschlag-Hsung-Fonzerelli-McQuack",
    photo: "../public/images/hollyhock.png",
    scores: []
  },
  {
    name: "Character Actress Margo Martindale",
    photo: "../public/images/margo-martindale.png",
    scores: []
  },
  {
    name: "Vincent Adultman",
    photo: "../public/images/vincent-adultman.png",
    scores: []
  },
  {
    name: "Sarah Lynn",
    photo: "../public/images/sarah-lynn.png",
    scores: []
  },
  {
    name: "Pickles Aplenty",
    photo: "../public/images/pickles-aplenty.png",
    scores: []
  },
  {
    name: "Sebastian St. Clair",
    photo: "../public/images/sebastian-st-clair.png",
    scores: []
  },
  {
    name: "Lenny Turteltaub",
    photo: "../public/images/lenny.png",
    scores: []
  },
  {
    name: "Woodchuck Coodchuck-Berkowitz",
    photo: "../public/images/woodchuck.png",
    scores: []
  },
  {
    name: "Judah Mannowdog",
    photo: "../public/images/judah-mannowdog.png",
    scores: []
  }
];

// export { friends };
// module.exports = friends;

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

function compareArrays(arrayOne, arrayTwo) {
  var differenceTotal = 0;
  for (var i = 0; i < arrayOne.length; ++i) {
    var difference = Math.abs(arrayOne[i] - arrayTwo[i]);
    differenceTotal += difference;
  }
  //  return differenceTotal;
  console.log(differenceTotal);
}

$(document).ready(function() {
  $("#submit-button").on("click", function(event) {
    event.preventDefault();
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
    $.post("/api/characters", newCharacter).then(function(data) {
      console.log("survey.html", data);
      alert("Adding character");
    });
    console.log(newCharacter.scores);
    console.log(friends[0].scores);
    // compareArrays(newCharacter.scores, friends[0].scores);
  });
});

// var firstArray = [1, 5, 3, 4, 4];
// var secondArray = [3, 5, 4, 2, 1];

// $(document).ready(function() {
//   $("#submit-button").on("click", function() {
//     event.preventDefault();
//     compareArrays(friends[0].scores, friends[1].scores);
//   });
// });
