// In object destructing order doesn't matter but the name does matter

const student = { name: "Lucas", position: "First", rollNo: 46 };
const { name, position } = student;
console.log(name);