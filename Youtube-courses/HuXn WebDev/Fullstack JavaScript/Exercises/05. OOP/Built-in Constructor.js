// Built-in constructors, also known as native constructors, are standard constructors provided by JavaScript that allows you to create objects of various data types. These constructors are available globally and do not need to be explicitly defined. They provide a convenient way to create instances of primitive data types and built-in objects.

const num1 = new Number(10);
const num2 = 10;

console.log(typeof num1);
console.log(typeof num2);

// -----------------------------------------

const st1 = new String("Lucsas");
console.log(st1);

// -----------------------------------------

const bool1 = Boolean(false);
console.log(bool1);

// -----------------------------------------

const arr1 = Array(1, 2, 3, 4, 5);
console.log(arr1);
