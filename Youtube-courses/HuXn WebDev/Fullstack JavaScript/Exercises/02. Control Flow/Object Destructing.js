// In object destructing order doesn't matter but the name does matter

const student = { name: "Lucas", position: "First", rollNo: 46 };
const { name, position } = student;
console.log(name);

// Object destructuring and rest operator
let { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);
console.log(b);
console.log(rest);