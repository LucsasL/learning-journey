const person = {
  name: "Lucsas",
  age: 18,
  greet: function () {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
  }
};

console.log(person.greet());