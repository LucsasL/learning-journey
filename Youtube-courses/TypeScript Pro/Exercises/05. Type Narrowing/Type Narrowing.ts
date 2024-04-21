// Type narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code.

// TypeScript provides several mechanisms for narrowing types

// -> Type guards

// Type guards are mechanism that help TypeScript understand and narrow down the types more precisely. One common type guard is the typeof operator.

// Define a union type
type MyType = string | number;

// Example function with type guard
function exampleFunction(value: MyType): void {
  // Type guard using typeof
  if (typeof value === "string") {
    // Within this blocks, TypeScript knows that "value" is a string
    console.log(value.toUpperCase());
  } else {
    // Within this block, TypeScript knows that "value" is a number
    console.log(value.toFixed(2));
  }
}

// Example usage
exampleFunction("Hello, TypeScript"); // HELLO, TYPESCRIPT
exampleFunction(54); // Output: 54.00

// -> The instanceof operator

// The instanceof operator is another type guard in TypeScript that allows you to check whether an object is an instance of a particular class or constructor function.

class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

// Example function instanceof type guard
function animalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    // Within this box block, TypeScript knows that "animal" is an instance of Dog
    animal.bark();
  } else {
    // Within this box block, TypeScript knows that "animal" is an instance of Dog
    animal.meow();
  }
}

// Example usage
const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog); // Output: Woof!
animalSound(myCat); // Output: Meow!

// -> Intersection types

// Intersection types in TypeScript allow you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create intersection types using the & operator.

// Define two types
type Employee = {
  id: number;
  name: string;
}

type Manager = {
  department: string;
  rate: string;
}

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager;

// Example usage
const manager: ManagerWithEmployeeInfo = {
  id: 123,
  name: "John Doe",
  department: "Engineering",
  rate: "Team Lead",
};

console.log(manager.id); // Output: 123
console.log(manager.name); // Output: John Doe
console.log(manager.department); // Output: Engineering
console.log(manager.rate); // Output: Team Lead

// -> Discriminated unions

