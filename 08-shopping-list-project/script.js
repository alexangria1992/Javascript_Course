const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}
function onAddItemSubmit(e) {
  e.preventDefault();
  const newItem = itemInput.value;
  //Validate Input
  if (newItem.value === "") {
    alert("please add an item");
    return;
  }
  // Create item DOM element
  addItemToDOM(newItem);
  // Add item to local storage
  addItemToStorage(newItem);
  checkUI();
  itemInput.value = "";
}

function addItemToDOM(item) {
  //Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  // console.log(li);
  const button = createButton("remove-item btn-link text-red");
  console.log(button);
  li.appendChild(button);
  // Add li to the DOM
  itemList.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);

  // Convert to JSON string and set to local Storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemsFromStorage;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  // console.log(e.target.parentElement.classList);
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  console.log(text);
  const items = itemList.querySelectorAll("li");
  items.forEach((item) => {
    // console.log(item);
    const itemName = item.firstChild.textContent.toLowerCase();
    console.log(itemName);
    if (itemName.indexOf(text) != -1) {
      // console.log(true);
      item.style.display = "flex";
    } else {
      // console.log(false);
      item.style.display = "none";
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll("li");

  console.log(items);
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

// Initialize app
function init() {
  //Event Listeners
  itemForm.addEventListener("submit", onAddItemSubmit);
  itemList.addEventListener("click", removeItem);
  clearBtn.addEventListener("click", clearItems);
  itemFilter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);

  checkUI();
}

init();
