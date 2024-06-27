// Modules are a way of separating the data we use in an application

// This will allow us to use the function from that
// module (in this case "greet.js") the same way.
const greet = require("./greet");
const { person1, person2, person3 } = require("./people");

greet(person1);
greet(person2);
greet(person3);