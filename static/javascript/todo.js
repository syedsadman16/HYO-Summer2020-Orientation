//const timer = require("timer");
var selectedPomos = 1;
var listPomo = {};
var listMins = {};

function addListItem(input, time) {
  let list = document.getElementById("list");
  let item = document.createElement("li");

  // Append text input to list item
  item.appendChild(document.createTextNode(input));
  
  // Create span with time
  var span = document.createElement("SPAN");
  var timeText = document.createTextNode(time + " minutes");
  span.className = "time";
  span.appendChild(timeText);

  // Append span to list item
  item.appendChild(span);

  // Add all the items to list
  list.append(item);

  return;
}


function addTaskButtonClicked() {
  let text = document.getElementById("newTask").value;
  let pomos = document.getElementById("pomoCount").value;
  updateTime(document.getElementById("minCount").value)
  if (text != "") {

      /* Add pomodoro time clicked logic here */
      listPomo[text] = pomos;
      listMins[text] = time['Pomo'];
      selectedPomos = pomos;
      addListItem(text, pomos * time["Pomo"]); // time from timer.js
      document.getElementById("newTask").value = "";
      //document.getElementById("pomoCount").value = "";
      //document.getElementById("minCount").value = "";
      
  }
  else {
    alert("Field cannot be empty");
  }
  
  pomos = 0; // resets pomo count to 0
  setPomoText();
  switchTimer(evt, "Pomo");
  return;
}


function setPomoText() {
  document.getElementById("pomoCount").value = (pomos*time["Pomo"]).toString() + " min";
}

// Removes list item clicked on
function remove() {
  document.getElementById("list").addEventListener("click",function(e) {
    if (e.target.tagName.toUpperCase() == "LI") {
       let str = e.target.innerHTML;
       let n = str.search("<");
       selectedPomos = listPomo[str.substr(0,n)];
       updateTime(listMins[str.substr(0,n)]);
       switchTimer(0, "Pomo");
    }
  });
}

function updateTime(pomoTime) {
  time['Pomo'] = pomoTime;
  time['sBreak'] = time['Pomo'] / 5;
  time['lBreak'] = time['Pomo'] / 1.7;
}

