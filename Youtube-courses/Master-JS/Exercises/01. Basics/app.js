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
console.log(10 !== '10');

// Relational Operators
// console.log(10 > 10); false
// console.log(10 < 10); false
// console.log(10 >= 10); true
// console.log(10 <= 10); true

// Strings
// 1. Concatenation
let firstName = "Lucas";
let secondName = "Lira";
let fullName = firstName.concat(secondName);
console.log(fullName);

// 2. Append
firstName += " \"Lucsas\"";
console.log(firstName);

// 3. Length
console.log(firstName.length);

// 4. Cases
// console.log(firstName.toLocaleLowerCase())
// console.log(firstName.toLocaleUpperCase());

// 5. Slice
console.log(firstName.slice(0, 2));

// 6. Split & Join
console.log(firstName.split(' '));

// 7. Includes
console.log(firstName.includes('X'));

// 8. Trim
// console.log(firstName.trim());

// 9. Placeholders
console.log(`${firstName} ${secondName}`);