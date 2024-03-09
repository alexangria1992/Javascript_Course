function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");
  const li = document.createElement("li");
  li.textContent = "replaced first";

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");
  secondItem.outerHTML = "<li>Replaced Second</li>";
}

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");
  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";
  header.replaceChild(h2, h1);
}

function replaceAllItems() {
  const lis = document.querySelectorAll("li");
  lis.forEach((item, index) => {
    // item.outerHTML = "<li>replace All</li>";
    if (index === 1) {
      item.innerHTML = "second Item";
    } else {
      item.innerHTML = "replace all";
    }
  });
  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? "<li>Second Item</li>" : "<li>Item</li>")
  );
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
