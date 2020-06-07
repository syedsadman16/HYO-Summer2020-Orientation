function addListItem(input) {
  let item = document.createElement("li");
  let list = document.getElementById("list");
  item.textContent = input;
  list.appendChild(item);
  return;
}


function newTaskButtonClicked() {
  let text = document.getElementById("newTask").value;
  if (text != "") {
    addListItem(text);
    document.getElementById("newTask").value = "";
  }
  return;
}
