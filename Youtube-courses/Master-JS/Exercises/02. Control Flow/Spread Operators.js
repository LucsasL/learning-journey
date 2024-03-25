// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

// Function
function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["Red", "Green", "Blue", "Teal"]

giveMe4(1, 2, 3, 4);
console.log("----------------------");
giveMe4(...colors);
console.log("----------------------");

// Arrays
const strNums = ['one', 'two', 'three'];
const moreStrNums = ['four', 'five', 'six'];
const concat = [...strNums, ...moreStrNums];

console.log(concat);

let peoples = ["Lucas", "Alex", "Jordan"];
const allPeps = ["Kumar", ...peoples, "John"];
console.log(allPeps);

// Objects
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3, w: 4 };

const obj3 = {...obj1, ...obj2};

console.log(obj3);

let person = {
  name: "Lucas",
  Age: 18,
  Gender: "Male"
}

const clone = {...person, work: "Programmer"};

console.log(clone);