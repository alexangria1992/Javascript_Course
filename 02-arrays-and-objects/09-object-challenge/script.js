const library = [
  {
    title: "Harry Potter and the Prisoner of Azkaban ",
    author: "JK Rowling",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Fellowship of the ring ",
    author: "JRR Tolkien",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "1984 ",
    author: "George Orwell",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

console.log(firstBook);

const str = JSON.stringify(library);
console.log(str);

// console.log(library);
