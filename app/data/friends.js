var friends = [
  {
    name: "BoJack Horseman",
    photo: "images/bojack-horseman.png",
    scores: []
  },
  {
    name: "Diane Nguyen",
    photo: "images/diane-nguyen.png",
    scores: []
  },
  {
    name: "Mr. Peanutbutter",
    photo: "images/mr-peanutbutter.png",
    scores: []
  },
  {
    name: "Princess Carolyn",
    photo: "images/princess-carolyn.png",
    scores: []
  },
  {
    name: "Todd Chavez",
    photo: "images/todd-chavez.png",
    scores: []
  },
  {
    name:
      "Hollyhock Manheim-Mannheim-Guerrero-Robinson-Zilberschlag-Hsung-Fonzerelli-McQuack",
    photo: "images/hollyhock.png",
    scores: []
  },
  {
    name: "Character Actress Margo Martindale",
    photo: "images/margo-martindale.png",
    scores: []
  },
  {
    name: "Vincent Adultman",
    photo: "images/vincent-adultman.png",
    scores: []
  },
  {
    name: "Sarah Lynn",
    photo: "images/sarah-lynn.png",
    scores: []
  },
  {
    name: "Pickles Aplenty",
    photo: "images/pickles-aplenty.png",
    scores: []
  },
  {
    name: "Sebastian St. Clair",
    photo: "images/sebastian-st-clair.png",
    scores: []
  },
  {
    name: "Lenny Turteltaub",
    photo: "images/lenny.png",
    scores: []
  },
  {
    name: "Woodchuck Coodchuck-Berkowitz",
    photo: "images/woodchuck.png",
    scores: []
  },
  {
    name: "Judah Mannowdog",
    photo: "images/judah-mannowdog.png",
    scores: []
  }
];

function updateRangeText(val, question) {
  document.getElementById("range-number" + question).innerHTML = val;
  console.log(val);
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

module.exports = friends;
