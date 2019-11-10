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
