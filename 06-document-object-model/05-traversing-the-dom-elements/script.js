// Get child elements

const parent = document.querySelector(".parent");
output = parent.children;
output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "child one";
parent.lastElementChild.innerText = "child three";

// Get parent elements

const child = document.querySelector(".child");

output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

//Sibling Elements
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "yellow";

console.log(output);
// console.dir(output);
