// A type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.

// Type aliases are defined using the type keyword, followed by the name of the alias, an equal sign (=), and the type it refers to.

// type myString = string;

type User = {
  name: string;
  age: number;
  location: string;
}

function printUserInfo(person: User) {
  console.log(`Name: ${person.name}, Age: ${person.age}, Location: ${person.location}`);
}

const myUser: User = { name: "Alice", age: 25, location: "USA" };
printUserInfo(myUser);