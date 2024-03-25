// Template strings, also know as template literals, are a feature in JavaScript that allows you to create strings with embedded expressions. They are denoted by backsticks `` instead of single or double quotes. Template strings provide a more flexible and concise way to construct strings, especially when they involve variables or expressions.

const firstName = "Lucas";
const lastName = "Lira";

function info() {
  return `My name is Lucas Lira & I'm 18 years old`;
}

console.log(`My name is: ${firstName} ${lastName}.`);
console.log(`${ ['one', 'two', 'three']}`);
console.log(`${info}`);