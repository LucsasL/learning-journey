// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// new Promise()
// A JavaScript Promise object contains both the producing code and calls to the consuming code. It can be used to deal with Asynchronous operation in JavaScript.

// It has 3 states:
// -> Pending: Initial State, Not yet Fulfilled or Rejected
// -> Fulfilled / Resolved: Promise Completed
// -> Rejected: Promise Failed

// Resolved
// then() is a method used to handle the successful outcome of a Promise in JavaScript. It takes 2 arguments: (onFulfilled, onRejected)

// Rejected
// catch() method returns a Promise & deals with rejected case only.

// new Promise((resolve, reject) => {
//   // Async Operations
//   resolve(number);
//   reject(Error);

// })
//  .then((value) => console.log(value))
//  .catch((error) => console.log(error));

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is an even number.`);
    } else {
      reject(`${number} is an odd number.`);
    }
  });
}

const numberToCheck = 7; // Odd

checkNumber(numberToCheck).then((message) => {
  console.log(`Success: ${message}`);
}).catch(error => {
  console.error(`Error ${error}`);
});