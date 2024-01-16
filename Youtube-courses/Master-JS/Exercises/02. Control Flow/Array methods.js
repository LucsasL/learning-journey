// Arrays methods

// Push item: Add an item in the last index of the array
const fruits = [
    "Apples",
    "Pomegranate",
    "Mango",
    "Strawberries",
    "Pineapple",
    "Grapes"
];

console.log(fruits.length);
fruits.push("Bananas");

console.log(fruits);
console.log(fruits.length);

// Pop item: Remove the last item of the array
fruits.pop();
console.log(fruits.length);

// Shift item: Delete first item of the array
fruits.shift();

// Unshift item: Append an item at the beginning of the array
fruits.unshift("Dunno");

const newFruits = ["Avocado", "Blueberries", "Apricots", "Lemons"];

// Concat items: Join two arrays together
const totalFruits = fruits.concat(newFruits);
console.log(totalFruits);

// Includes item: If the query in the method be in the array, then it will return TRUE
const pl = ["JavaScript", "GoLang", "Python", "PHP"];
const numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("Golang"));

// Join items: Turn the array into a string with all the items inside of it
console.log(pl.join('-'));

// Reverse items: Reverts the order of the items
// console.log(pl.reverse());

// Slice items: Take the items in the array and transform it in a data structure
console.log(pl.slice(0, 2));

// Sort items: Sort the items inside the array
console.log(numbers.sort());