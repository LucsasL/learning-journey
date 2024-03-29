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
firstName += ' "Lucsas"';
console.log(firstName);

// 3. Length
console.log(firstName.length);

// 4. Cases
// console.log(firstName.toLocaleLowerCase())
// console.log(firstName.toLocaleUpperCase());

// 5. Slice
console.log(firstName.slice(0, 2));

// 6. Split & Join
console.log(firstName.split(" "));

// 7. Includes
console.log(firstName.includes("X"));

// 8. Trim
// console.log(firstName.trim());

// 9. Placeholders
console.log(`${firstName} ${secondName}`);

let desc = `This is some random 
    Text
    1
    2
    
    `;

console.log(desc);