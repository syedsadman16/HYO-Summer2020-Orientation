function addToList(input) {
  var elem = document.createElement("LI");
  var text = document.createTextNode(input);
  elem.appendChild(text);
  document.getElementById("list").appendChild(elem);
}

function newTaskButtonClicked() {
  addToList(document.getElementById("newTask").value);
}
