var pomos = 0;

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
  list.prepend(item);
  return;
}


function addPomoButtonClicked() {
  pomos += 1;
  setPomoText();
}


function addTaskButtonClicked() {
  let text = document.getElementById("newTask").value;
  console.log(text);
  if (text != "") {

    /* Add pomodoro time clicked logic here */

    addListItem(text, pomos*25); // each pomo represents 25 minutes
    document.getElementById("newTask").value = "";
  }
  else {
    alert("Field cannot be empty");
  }
  pomos = 0; // resets pomo count to 0
  setPomoText();
  return;
}


function setPomoText() {
  document.getElementById("pomoCount").innerHTML = (pomos*25).toString() + " min";
}

// Removes list item clicked on
function remove() {
  document.getElementById("list").addEventListener("click",function(e) {
    if (e.target.tagName.toUpperCase() == "LI") {
      e.target.parentNode.removeChild(e.target);
    }
  });
}
