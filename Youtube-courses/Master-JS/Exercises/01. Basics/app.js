// Saying hello to the world
console.log("Hello, world!");

// Cleaning the console
console.clear();

/*
    Name: 'Lucsas'
    Age:   18
    Prof: 'Programmer'
*/
console.table({Name: 'Lucsas', Age: 18, Prof: 'Programmer'});

// log → console.log

// Variables: (reserved keyword) (variable name) (value)
let name = "Lucsas";
console.log(name);

// Primitive types

// 1. Number
let num = 10.01;

// Basic math
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 2);

let counter = 0;
counter++;
console.log(counter);

// Boolean → true || false
let number = 10;

// falsy
/*
    → false
    → null
    → undefined
    → 0
    → -0
    → '', "", ``, (empty quotes)
    → true
*/

let notDefined;
console.log(notDefined);

/*
 Comparison Operators
 → Relational Operators
    → > Greater than
    → < Less than
    → >= Greater than or equal to
    → <= Less than or equal to

 → Equality Operators
    → == Equal to
    → === strict equality (type + value)
    → != strict non-equality operator (type + value)
    → == loose equality operator (value)
    → != not equality operator ()
*/

console.log(10 === 10);
console.log(10 !== '10')

// Relational Operators
// console.log(10 > 10); false
// console.log(10 < 10); false
// console.log(10 >= 10); true
// console.log(10 <= 10); true