const age = 13;

// Using an if statement
if (age >= 19) {
  console.log("You can vote!");
} else {
  console.log("You can not vote");
}

// using a ternary operator

age >= 18 ? console.log("You can vote!") : console.log("You can not vote");

// assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "you can vote" : "you cant vote";

console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;
// let redirect;

// if (auth) {
//   alert("Welcome to the dashboard");
//   redirect = "/dashboard";
// } else {
//   alert("Access Denied");
//   redirect = "/login";
// }

// const redirect = auth
//   ? (alert("Welcome to the dashboard"), "/dashboard")
//   : (alert("Access Denied"), "/login");

// console.log(redirect);

auth ? console.log("Welcome to the dashboard") : null;
auth && console.log("Welcome to the dashboard");
