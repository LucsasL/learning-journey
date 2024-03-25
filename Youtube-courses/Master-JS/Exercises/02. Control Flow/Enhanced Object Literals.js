// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties and methods

function user(name, age, work) {
  return {
    name,
    age,
    work,
    intro () {
      console.log(`My name is ${name} I'm ${age} years old and I work as a ${work}.`);
    }
  };
}

const lucas = user("Lucas", 18, "Programmer");
const alex = user("Alex", 20, "Engineer");
console.log(lucas.intro());