function insertAfter(newEl, exisitingEl) {
  exisitingEl.parentElement.insertBefore(newEl, exisitingEl.nextSibling);
}

// New element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After!";

// Existing element to insert after
const firstItem = document.querySelector("li:first-child");

// Our custom function
insertAfter(li, firstItem);
