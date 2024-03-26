// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

function user(x, ...userData) {
  console.log(x);
  console.log(userData);
}

user("Some variable", "Lucas", 18, "Programming", "Football");

function person(firstName, lastName, ...hobbies) {
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Hobbies: ${hobbies}`);
}

person("Lucas", "Lira", "Programming", "Studying", "Working Out", "Listen to music");