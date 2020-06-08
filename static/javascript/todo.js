

// Appends item to ordered list
function addListItem(input) {
  let list = document.getElementById("list");
  let item = document.createElement("li");
  item.appendChild(document.createTextNode(input));
  list.appendChild(item);
  return;
}


function addTaskButtonClicked() {
  let text = document.getElementById("newTask").value;
  console.log(text);
  if (text != "") {
    addListItem(text);
    document.getElementById("newTask").value = "";
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