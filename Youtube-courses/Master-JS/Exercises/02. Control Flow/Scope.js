// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

// There are two types of scopes in JavaScript.

// Global Scope variables are those declared outside of a block.

// Local Scope variables are those declared inside of a block.

let textMessage = "Hi"; // Global variable
console.log(textMessage);

function showMessage() {
  let textMessage = "Hello"; // Local variable
  console.log(textMessage);
}

showMessage();

for (let i = 0; i < 5; i++) {
  console.log(i); // Local variable
}