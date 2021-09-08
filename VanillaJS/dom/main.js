const form = document.querySelector("#addForm");
form.addEventListener("submit", addItem);

const items = document.querySelector("#items");
items.addEventListener("click", deleteItem);

const filter = document.querySelector("#filter");
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  const input = form.querySelector("#item");
  if (input.value) {
    const newItem = document.createElement("li");
    newItem.className = "list-group-item";
    let text = document.createTextNode(input.value);
    newItem.appendChild(text);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    text = document.createTextNode("X");
    deleteBtn.appendChild(text);

    newItem.appendChild(deleteBtn);
    items.appendChild(newItem);

    input.value = "";
  } else {
    console.log("Need value");
  }
}

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const row = e.target.parentElement;
      row.remove();
    }
  }
}

function filterItems(e) {
  const input = e.target.value.toLowerCase();
  const itemList = items.querySelectorAll("li");

  Array.from(itemList).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
