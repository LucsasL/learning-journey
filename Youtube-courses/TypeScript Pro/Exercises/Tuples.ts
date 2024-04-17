// Tuple is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with know lengths.

// First Example: Tuple
let myTuple: [string, number] = ["Hello", 42];
console.log(myTuple[0]); // "Hello"
console.log(myTuple[1]); // 42

console.log("-------------------------");

// Second Example: Destructuring Individual Element
let myTuple2: [string, number] = ["Hello", 42];
let [first, second] = myTuple2;
console.log(first); // "Hello"
console.log(second); // 42

console.log("-------------------------");

// Practical Example
const products: (number | string)[] = ["Item 1", 12];

console.log(products);

console.log("-------------------------");

// Practical Example 2
const games: [string, number, boolean] = ["Game 1", 5, true];

console.log(games);