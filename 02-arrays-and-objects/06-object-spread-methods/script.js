let x;

const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const person = {
  address: {
    ccords: {
      lat: 42.9345,
      lng: -71.3242,
    },
  },
};

x = person.address.ccords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  {
    id: 1,
    name: "Buy Milk",
  },
  {
    id: 2,
    name: "Pickup kids from school",
  },
  {
    id: 3,
    name: "Take out trash",
  },
];

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty("name");

console.log(x);
