// The every() and some() are two built-in array methods in JavaScript that allow you to check the elements of an array based on a given condition. Both methods take a callback function as an argument, which is applied to each element of the array.

// The every() tests whether all elements in the array pass the condition specified by the provided callback function. It returns true if the callback function return true for every element, and false if any element fails the condition.

// The some() method tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function return true for at least one element, and false if no element passes the condition.

const peoples = ["Lucsas", "Jordan", "Alex"];

const res1 = peoples.every((people) => people.length === 4);
console.log(res1);

const res2 = peoples.some((people) => people.length === 4);

console.log(res2);

console.log("---------- Second Example ----------");

const songs = [
  { name: "Lucky you", duration: 4.43 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

const everyRes = songs.every(song => song.duration > 3);
const someRes = songs.some(song => song.duration > 3);

console.log(everyRes);
console.log(someRes);