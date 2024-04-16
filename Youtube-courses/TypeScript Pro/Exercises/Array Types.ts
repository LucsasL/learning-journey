// Arrays are a type of object that can store multiple values of the same data type. Arrays in TypeScript are typed, which means you can specify the type of values that an array can hold.

// 2 Types Of Arrays

// Using the square bracket notation [] to indicate an array of a specific type

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

const str: string[] = ["One", "Two", "Three"];
console.log(str);

// Using the generic Array <type> notation to indicate an array of a specific type

const names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(names);

const items: Array<number> = [1, 4, 5];
console.log(items);