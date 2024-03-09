// Get child elements
let output;
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

// const child = document.querySelector(".child");

// output = child.parentElement;
// child.parentElement.style.border = "1px solid #ccc";
// child.parentElement.style.padding = "10px";

//Sibling Elements
// const secondItem = document.querySelector(".child:nth-child(2)");
// output = secondItem;
// output = secondItem.nextElementSibling;

// secondItem.nextElementSibling.style.color = "green";
// secondItem.previousElementSibling.style.color = "yellow";

// All Nodes
output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[5].style.color = "red";
output = parent.firstChild;
output = parent.lastChild;
parent.lastChild.textContent = "helllo";

// Parent node
const child = document.querySelector(".child");
output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// siblings
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem.nextSibling;
console.log(output);
// console.dir(output);
