// In TypeScript, generics allow you to create reusable components that can work with a variety of types. Generics make it possible for you to define functions, classes, and interfaces that can work with different data types without having to duplicate code.

// Code without generics

const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printBoolean = (x: boolean) => console.log(x);

printString("Hello");
printNumber(2);
printBoolean(true);
console.log("------------------------------");

// Code with generics

function printInfo<T>(x:T): T {
  return x;
}

const str = printInfo<string>("Hello"); // Hello
const num = printInfo<number>(5); // 5
const bool = printInfo<boolean>(true); // true