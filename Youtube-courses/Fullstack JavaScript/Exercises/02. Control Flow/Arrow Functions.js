// Arrow functions, also know as fat arrow functions, are a concise and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions

// function greet(username) {
//   return `Hello ${username}!`;
// }

const greet = (username) => `Hello ${username}!`;
console.log(greet("Lucas"));

const double = n => n * 2;
console.log(double(15));