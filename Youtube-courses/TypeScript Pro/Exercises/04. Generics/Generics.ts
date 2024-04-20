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

console.log(str);
console.log(num);
console.log(bool);
console.log("------------------------------");

// Practical Example
function printString2(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}

function printNumber2(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

function printBool2(item: boolean, defaultValue: boolean): [boolean, boolean] {
  return [item, defaultValue];
}

const resStr = printString2("Just", "Testing");
console.log(resStr);

const resNum = printNumber2(5, 4);
console.log(resNum);

const resBool = printBool2(true, false);
console.log(resStr);
console.log("------------------------------");

function uniqueDataTypesFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

const genericsRes = uniqueDataTypesFunc<(string | number)>(5, "Something");
console.log(genericsRes);