function greet(username) {
  console.log(`Hello, ${username}`);
}

// Tell other files they can use this function
module.exports = greet;