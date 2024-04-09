// Constructor functions in JavaScript are regular functions used with the "new" keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.

function CreatePeople(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;

  this.info = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} & I love ${this.pl}.`)
  };
}

// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using new keyword

const john = new CreatePeople("John", "Doe", "Java");
const lucsas = new CreatePeople("Lucas", "Lira", "JavaScript");
console.log(john);
console.log(lucsas);
lucsas.info();

// ----------------------------------------------

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;

  this.getInfo = function () {
    return `${this.name} by ${this.author} ${this.year}`;
  }
}

const book1 = new Book("The subtle art of not giving a F*ck", "Mark", 2020);
const book2 = new Book("Atomic Habits", "James Clear", 2022);

console.log(book1);
console.log(book2);

const bookRes1 = book1.getInfo();
const bookRes2 = book2.getInfo();

console.log(bookRes1);
console.log(bookRes2);