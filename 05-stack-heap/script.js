// Values are store in the stack
const name = "John";
const age = 30;

// Reference values stored on heap

const person = {
  name: "Alex",
  age: 31,
};

let newName = name;
newName = "Johnathan";

let newPerson = person;
newPerson.name = "bradley";

console.log(person, newPerson);
