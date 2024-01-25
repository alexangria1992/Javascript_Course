// const email = "test@test.com";

// if (email) {
//   console.log("You passed in an email");
// }

// console.log(Boolean(email));

//Truthy Values

// - Everything else that is not falsy
// - true
// - '0 (everything else that is not falsy)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty functions)

const x = function () {};

// const x = false;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

if (!isNaN(children)) {
  console.log(`you have ${children} children`);
} else {
  console.log("Please enter number of children");
}

//Checking for empty arrays
const posts = ["Post One"];
console.log(posts.length);

if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No Posts To List");
}

// Checking for empty Objects
const user = {
  name: "Alex",
};
// console.log(user.length);
if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log("No User");
}

// Loose Equality (==)
console.log(false == 0);
console.log("" === 0);
console.log(null === undefined);
