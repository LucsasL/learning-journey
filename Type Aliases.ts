// A type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.

// Type aliases are defined using the type keyword, followed by the name of the alias, an equal sign (=), and the type it refers to.

// type myString = string;

type Person = {
  name: string;
  age: number;
}

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const myPerson: Person = { name: "Alice", age: 25 };
printPerson(myPerson);