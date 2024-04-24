/*
    Logical operators

    1. -> Logical AND (&&)
        -> TRUE if both the operands/boolean values are true, else evaluates to FALSE

    2. -> Logical OR (||)
        -> TRUE if either of the operands/boolean values is true. evaluates to false if both are FALSE

    3. -> Logical NOT (!)
        -> TRUE if the operands is FALSE and vice-versa
*/

const a2 = true;
const b2 = false;
const c = 4;

console.log(a && b);
console.log(c > 2 && c < 2);

console.log(a || b);
console.log(b || b);
console.log(c > 2 || c < 2);

console.log(!a);

let password = "Lucsas WebDev";

if (password.length >= 8 || password.includes("Web")) {
  console.log("Valid password");
} else {
  console.log("Invalid password");
}

let isTrue = true;

console.log(!isTrue);