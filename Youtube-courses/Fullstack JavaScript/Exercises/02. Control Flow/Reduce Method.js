// The reduce() method applies the reducer function to each element of an array, accumulating the results into a single value. It is often used to perform calculations or aggregations on array elements and simplify the array into a single value.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((p, c) => {
  console.log(`previous: ${p}`);
  console.log(`Current: ${c}`);
  return p + c;
  // 0 + 1 => 1
  // 1 + 2 => 3
  // 3 + 3 => 6
  // 6 + 4 => 10
  // 10 + 5 => 15
}, 0);

console.log(sum);

const peoples = [
  { name: "Lucsas", age: 18 },
  { name: "John", age: 17 },
  { name: "Alex", age: 20 },
  { name: "Jimmy", age: 50 },
  { name: "Alex", age: 30 },
];

const oldestAge = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);

console.log(oldestAge);

const words = [
  "Apple",
  "Banana",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Apple",
  "Grape"
];

const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = (frequencyMap[word] || 0 + 1);
  return frequencyMap
}, {});

console.log(wordFrequency);