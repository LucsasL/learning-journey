// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4, 5];

let double = numbers.map(num => num * 2);

console.log(double);

let people = [
  { firstName: "Macom", lastName: "Reynolds" },
  { firstName: "Alex", lastName: "Ronald" },
  { firstName: "Alan", lastName: "Christopher" },
];

const results = people.map(person => {
  return [person.firstName, person.lastName];
});

console.log(results);