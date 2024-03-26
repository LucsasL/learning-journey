// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

let password = 8;

function passwordChecker(ps) {
  // if (ps === 8) {
  //   return `Strong Password`;
  // } else {
  //   return `Password should be 8 characters.`;
  // }

  // Boolean Expression ? valueIfTrue : valueIfFalse;
  return ps >= 8 ? `Strong password` : `Password should be 8 characters.`;
}

const res = passwordChecker(password);
console.log(res);