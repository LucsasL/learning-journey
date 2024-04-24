// The find() method is another built-in array helper in JavaScript that allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

const peoples = [
  { name: "Lucsas", age: 18 },
  { name: "John", age: 17 },
  { name: "Alex", age: 20 },
  { name: "Jimmy", age: 30 },
  { name: "Alex", age: 30 },
];

const res = peoples.find((person) => person.name == "Alex");

console.log(res);

const posts = [
  { id: 1, content: "Good post" },
  { id: 2, content: "Funny post" },
  { id: 3, content: "Sad Post" },
  { id: 4, content: "Doomer post" },
];

const postRes = posts.find((post) => post.content === "Funny post");
console.log(postRes);
