// Interfaces is a way to define a contract for the shape of an object. It specifies the properties and their types that an object must have. Interfaces are a powerful tool for enforcing a certain structure in your code.

// First Example

// Interface Definition
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// Usage
const examplePerson: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
}

console.log(examplePerson);
console.log("----------------------------");

// While interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TypeScript can also be used to describe the shape of functions and classes.

// Second Example

// Interface for a function
interface MathOperation {
  (x: number, y: number): number;
}

// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));
console.log(subtract(7, 2));
console.log("----------------------------");

// Third Example

// Interface for a class
interface Vehicle {
  start(): void;
  stop(): void;
}

// Class implementing the interface
class Car implements Vehicle {
  start() {
    console.log("Car started");
  }

  stop() {
    console.log("Car stopped");
  }
}

const myCar = new Car();
myCar.start();
myCar.stop();
console.log("----------------------------");

// Practical Example
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExample: Computer = {
  name: "i7",
  ram: 8,
  hdd: 100,
};

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);
console.log("----------------------------");

// Practical Example 2
interface Movie {
  readonly name: string;
  ratings: number;
  genre?: string;
}

const movie1: Movie = {
  name: "Star Wars",
  ratings: 8.9,
  genre: "Action",
}

console.log(movie1.name);
console.log(movie1.ratings);
console.log(movie1.genre);
console.log("----------------------------");

// Practical Example 3
interface Person2 {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person2) {
  console.log(`Hello, ${person.firstName} ${person.lastName}`);
  person.sayHello();
}

const john: Person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log("Howdy");
  }
};

const irineu: Person2 = {
  firstName: "Irineu",
  lastName: "Nusei",
  age: 45,
  sayHello() {
    console.log("Howdy");
  },
};

greet(john);
greet(irineu);