let output;

output = document;
output = document;
output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.body.doctype;
output = document;
output = document.characterSet;
output = document.contentType;
output = document.forms;
output = document.forms[0];

// document.forms[0].id = "new-id";
output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].id = "google-link";
output = document.links[0].href = "https://facebook.com";
output = document.links[0].href = "https://facebook.com";
output = document.links[0].className = "google-class";
output = document.links[0].classList;
output = document.images;
output = document.images[0];

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
