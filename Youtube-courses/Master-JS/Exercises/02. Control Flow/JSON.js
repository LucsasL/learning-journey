// JSON: JavaScript Object Notation
const person = {
  Name: "Lucas",
  Age: "18",
  email: "js@gmail.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    idk: true,
  }
};

// JSON.stringify()
const jsonString = JSON.stringify(person);
console.log(jsonString);

// JSON.parse()
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);