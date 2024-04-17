// Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable of parameter to accept multiple types.

// The syntax for defining a union type in TypeScript uses the pipe symbol (|)

// For example, if we want to define a variable that can be either a number or a string, we would write:
let myVar: number | string;

// We can also use unions with function parameters. For example, if we have a function that accepts either a string or an array of strings, we could define its parameters like this:
function foo(params:string | string[]) {
  // function body
  return params;
}

// Unions can also be combined with other types in TypeScript, such as interfaces and classes. For example, we could define an interface that has a property that can be either a string or a number:
interface myInterface {
  myProp: string | number;
}

const res = foo("Blue Pen");
console.log(res);

// 2nd Example
let password: string | number = "Something";
console.log(password);

type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  email: "someone#example.com",
  password: "12345",
};

console.log(user);

const items: (string | number)[] = [1, "Hello", 2, 3, "World", 4, 5];

console.log(items);