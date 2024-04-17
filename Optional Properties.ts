// You can make a certain property optional is an object type by adding a question mark (?) after the property name.

// For example, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property optional. You can do this by adding a question mark after the email property:

type Person = {
  name: string,
  age: number,
  email?: string,
};

// Now, when you create an object of type Person, you can choose whether or not to include the email property.

const alice: Person = { name: "Alice", age: 30 };
const bob: Person = { name: "Bob", age: 25, email: "bob@example.com" };

// In this example, the alice object does not include the email property, while the bob object does. Because the email property is marked as optional in the Person type definition, it is valid to create objects with or without it.

console.log(alice);
console.log(bob);

// 2nd Example

type User = {
  name: string;
  age?: number;
  location: string;
};

const user: User = {
  name: "Irineu",
  age: 20,
  location: "China",
}

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);