// The readonly property allows the programmer to create unchangeable properties

type User = {
  name: string;
  age?: number;
  readonly location: string;
};

const user: User = {
  name: "Irineu",
  age: 20,
  location: "China",
};

// ERROR
// user.location = "Something else";

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
