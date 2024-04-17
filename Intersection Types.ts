// An intersection type is a way to combine multiple types into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted by the & symbol.

type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};

type personAndEmployee = Person & Employee;

const alice: personAndEmployee = {
  name: "Alice",
  age: 30,
  id: 123,
  title: "Manager",
};

console.log(alice);

// 2nd Example

type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const irineu: User = {
  firstName: "Irineu",
  lastName: "Você não sabe nem eu",
  age: 30,
  email: "irineu@example.com",
  password: "12345",
};

console.log(`First Name: ${irineu.firstName}, Last Name: ${irineu.lastName}, Age: ${irineu.age}, Email: ${irineu.email}, Password: ${irineu.password}`);