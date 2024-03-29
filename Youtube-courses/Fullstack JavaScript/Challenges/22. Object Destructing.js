const person = {
  name: "Lucas Lira",
  age: 18,
  gender: "Male",
  country: "Brazil",
}

// Your task is to use object destructuring to extract the name, age and country properties from the person object.
const { name, age, country } = person;

// After extracting the properties, log each variable's value to the console.
console.log(`${name} ${age} ${country}`);