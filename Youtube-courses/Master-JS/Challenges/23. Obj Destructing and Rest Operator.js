const person = {
  name: "Lucas Lira",
  age: 18,
  gender: "Male",
  country: "Brazil",
}

// The task is to use object destructuring to extract the name, age and country properties from the person object and assign them to separate variables named personName, personAge and personCountry.
const { name: personName, age: personAge, country: personCountry } = person;

// After extracting the properties, log each variable's value to the console.
console.log(personName);
console.log(personAge);
console.log(personCountry);