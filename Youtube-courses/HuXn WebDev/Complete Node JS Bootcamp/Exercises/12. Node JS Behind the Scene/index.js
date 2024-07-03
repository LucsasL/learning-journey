// Blocking Code:

// console.log("Start!");
// setTimeout(() => {
//   alert("Non-Blocking");
// }, 1000);
// console.log("End");

// Non-Blocking Code:

// console.log("Start!");
// setTimeout(() => {
//   alert("Non-Blocking");
// }, 1000);
// console.log("End");

// FileSystem Module
import fs from "fs";

// Without Callbacks
console.log("Start Program without callbacks");

let data = fs.readFileSync("test.txt", "utf-8");
console.log(data);

console.log("Program Ended!");
console.log("----------------------------------------");

// With Callbacks
console.log("Start program with callbacks");

fs.readFile("test.txt", (error, data) => {
  error ? console.log(error) : console.log(data.toString());
});

console.log("Program Ended!");