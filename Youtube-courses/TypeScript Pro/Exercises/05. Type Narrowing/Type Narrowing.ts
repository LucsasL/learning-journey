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



// -> Intersection types



// -> Discriminated unions

