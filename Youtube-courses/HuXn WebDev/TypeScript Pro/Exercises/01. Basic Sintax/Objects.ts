// An object in TypeScript is a structure data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type alias. TypeScript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.

// type varName (annotation/type) = { property: value }

const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(`First Name: ${person.firstName}, Last Name: ${person.lastName}, Age: ${person.age}`);

// Using objects as function return value
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Irineu",
    age: 20,
    location: "Inside your walls",
  };
}

const res = printUser();
console.log(res);