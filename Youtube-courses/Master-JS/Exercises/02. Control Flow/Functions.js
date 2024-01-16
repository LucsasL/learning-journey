// A function is a block of code that performs a specific task.

// Functions makes the code reusable. You can declare it once and use it multiple times.

// Function makes the program easier as each small task is divided into a function.

// Function increases readability.

// DRY - Don't Repeat Yourself

// Function name(parameterIfAny) {...}

// Function Declaration
function greet() {
  console.log("Hello from a function!");

}

function sayHello(name = "Lucsas") {
  console.log(`Hello, ${name}!`);

}

// Call || Run || Execute
greet();
sayHello();

// return -> Function
function add(x, y) {
  return x + y;

}

const res1 = add(10, 20);
const res2 = add(20, 30);
const res3 = add(50, 40);

console.log(res1);
console.log(res2);
console.log(res3);

// Function Declaration
function sayHello(username = "Lucsas") {
  console.log(`Hello, ${username}!`);
}

// Function Expression
const greetings = function (user) {
  console.log(`Hello ${user}`);
  
}

greetings("John");

// When we provide as an (argument) to other function that function is know as callback function
function showCallFunc(fn) {
  const value = 10;

  fn(value);
}

showCallFunc(function(value) {
  console.log(value);
})