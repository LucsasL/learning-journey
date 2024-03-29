// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.

// for (let key in object) {...}

let person = {
  name: "Lucas",
  age: 18,
  gender: "Male",
}

for (let key in person) {
  console.log(key, person[key]);
}

let list = ["One", "Two", "Three", "Four"];

for (let index in list) {
  console.log(index, list[index]);
}