// Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicity specifying its type, TypeScript will try to infer the type based on the value you assign to it.

// Here we're inferring the types!
let tech = "TypeScript";
let favNumber = 5;
let isHard = true;

console.log(tech, favNumber, isHard);

// ERROR
// tech = false;
// favNumber = "Hello";
// isHard = 20;