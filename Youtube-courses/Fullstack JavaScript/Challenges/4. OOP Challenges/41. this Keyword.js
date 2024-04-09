// Create a person object and store your name & age

// → Also create a method name (greetRegular) by using a regular function

// → Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

// → Create one more method name (greetArrow) using arrow function

// → Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
const person = {
  name: "Lucas",
  age: 18,
  greetRegular: function () {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`
  },
  greetArrow: () => {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
  },
};

console.log(person.greetRegular());
console.log(person.greetArrow());