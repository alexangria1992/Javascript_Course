// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertadjacentelement";

  filter.insertAdjacentElement("afterend", h1);
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector("li:first-child");
  item.insertAdjacentText("afterend", "insertAdjacentText");
}

// insertAdjacentHTML example

function insertHTML() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML("afterend", "<h2>insertadjacentHTML</h2>");
}

// insertBefore example
function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li");
  li.textContent = "insertBefore";

  const thirdItem = document.querySelector("li:nth-child(3)");

  ul.insertBefore(li, thirdItem);
}
insertElement();
insertText();
insertHTML();
insertBeforeItem();
