const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");
let isEditMode = false;

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

  //Check for edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector(".edit-mode");
    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove("edit-mode");
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert("That item already exists!");
      return;
    }
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

function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    // console.log(1);
    setItemToEdit(e.target);
  }
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();
  return itemsFromStorage.includes(item);
}

function setItemToEdit(item) {
  isEditMode = true;
  itemList
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));
  item.classList.add("edit-mode");
  formBtn.innerHTML = "<i class='fa-solid fa-pen'></i> Update Item";
  formBtn.style.backgroundColor = "#228B22";
  itemInput.value = item.textContent;
}

function removeItem(item) {
  // console.log(item);
  if (confirm("Are you sure you want to remove?")) {
    item.remove();

    // Remove item from storage
    removeItemFromStorage(item.textContent);
    checkUI();
  }
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  // console.log(itemsFromStorage);
  // filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  //Res-set to localstorage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  localStorage.removeItem("items");
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
  itemInput.value = "";
  const items = itemList.querySelectorAll("li");

  console.log(items);
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
  formBtn.innerHTML = "<i class = 'fa-solid fa-plus'></i> Add item";
  formBtn.style.backgroundColor = "#333";
  isEditMode = false;
}

// Initialize app
function init() {
  //Event Listeners
  itemForm.addEventListener("submit", onAddItemSubmit);
  itemList.addEventListener("click", onClickItem);
  clearBtn.addEventListener("click", clearItems);
  itemFilter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);

  checkUI();
}

init();
