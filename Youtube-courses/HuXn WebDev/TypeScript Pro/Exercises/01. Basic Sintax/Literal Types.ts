// Literal Types allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.

// First Example: String Literal Types
let color: "red" | "green" | "blue";

color = "red"; // Valid
// color = "yellow"; // Invalid

console.log(color);

// Second Example: Numeric Literal Types
let number: 1 | 2 | 3;

number = 1;
// number = 4; Invalid

console.log(number);

// Third Example: Boolean Literal Types
let isTrue: true;

isTrue = true; // Value
// isTrue = false Invalid

console.log(isTrue);

// Practical Example
let password: "secretPassword" = "secretPassword";
// password = "Something else"; Invalid
console.log(password);