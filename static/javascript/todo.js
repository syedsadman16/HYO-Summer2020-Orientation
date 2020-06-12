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
  var timeText = document.createTextNode(time + " min");
  span.className = "time";
  span.appendChild(timeText);

  var span2 = document.createElement("SPAN");
  var x = document.createTextNode("X");
  span2.className = "close";
  span2.appendChild(x);
 

  // Append span to list item
  item.appendChild(span);
  item.appendChild(span2);

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
  }
  else {
    alert("Field cannot be empty");
  }

  pomos = 0; // resets pomo count to 0
  clearFields();
  setPomoText();
  switchTimer(evt, "Pomo");
  return;
}

function clearFields() {
  document.getElementById("newTask").value = "";
  document.getElementById("pomoCount").value = "# pomo";
  document.getElementById("minCount").value = "minutes";
}


function setPomoText() {
  document.getElementById("pomoCount").value = (pomos*time["Pomo"]).toString() + " min";
}

// Removes list item clicked on
function select() {
  document.getElementById("list").addEventListener("click",function(e) {
    let index = e.target;
    var close = document.getElementsByClassName("close");

    if (index.tagName.toUpperCase() == "LI") {
       let str = e.target.innerHTML;
       let n = str.search("<");
       selectedPomos = listPomo[str.substr(0,n)];
       updateTime(listMins[str.substr(0,n)]);
       switchTimer(0, "Pomo");
    }

    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      this.parentElement.style.display = "none";
    }
}

  });
}

function updateTime(pomoTime) {
  time['Pomo'] = pomoTime;
  time['sBreak'] = time['Pomo'] / 5;
  time['lBreak'] = time['Pomo'] / 1.7;
}

