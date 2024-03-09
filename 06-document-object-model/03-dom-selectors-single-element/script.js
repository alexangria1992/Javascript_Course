// document.getElementById()
// console.log(document.getElementById("app-title"));
// console.log(document.getElementById("app-title").id);
// console.log(document.getElementById("app-title").className);
// console.log(document.getElementById("app-title").getAttribute("id"));

//QuerySelectorAll
const listItems = document.querySelectorAll(".item");

// console.log(listItems);
// listItems[1].style.color = "red";
// listItems.forEach((item, index) => {
//   item.style.color = "red";

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerText = "Oranges";
//   }
// });
// setAttributes
// console.log((document.getElementById("app-title").id = "new-id"));
// console.log((document.getElementById("app-title").title = "Shopping-List"));
// console.log;
document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");
// console.log(title);

// Get/ change content
// console.log(title.textContent);
title.textContent = "Hello";
title.innerText = "hello Again";
title.innerHTML = "<strong>Shopping List</strong>";

//Change styles
title.style.color = "red";
title.style.background = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// document.querySelector(*)
// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#app-title"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelector("input[type=text"));

// console.log(document.querySelector("li:nth-child(2)").innerText);
// const secondItem = document.querySelector("li:nth-child(2)");
// secondItem.innerText = "Apple Juice";
// secondItem.style.color = "red";

// USe thse methods on other elemnts
// const list = document.querySelector("ul");
// console.log(list);
// const firstItem = list.querySelector("li");
// firstItem.style.color = "red";

const listItems2 = document.getElementsByClassName("item");
console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
  console.log(item.innerText);
});
