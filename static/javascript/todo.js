

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


function addTaskButtonClicked() {
  let text = document.getElementById("newTask").value;
  console.log(text);
  if (text != "") {
    
    /* Add pomodoro time clicked logic here */

    addListItem(text, 25); // Default is 25, pass in pomo time instead
    document.getElementById("newTask").value = "";
  }
  else {
    alert("Field cannot be empty");
  }
  return;
}

// Removes list item clicked on
function remove() {
  document.getElementById("list").addEventListener("click",function(e) {
    if (e.target.tagName.toUpperCase() == "LI") {
      e.target.parentNode.removeChild(e.target); 
    }
  });
}