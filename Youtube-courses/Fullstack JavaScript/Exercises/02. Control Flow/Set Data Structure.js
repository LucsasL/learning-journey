// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values. Unlike arrays, Set allows you to store only unique values, which means duplicate values are automatically removed. Each value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.

const mySet = new Set();

mySet.add("Apple");
mySet.add("Banana");
mySet.add("Orange");
mySet.add("Apple");

// Set() Methods
// console.log(mySet);
// console.log(mySet.has("Banana"));
// mySet.delete("Banana");
// mySet.clear();

for (let item of mySet) {
  console.log(item);
}