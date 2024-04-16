// Function parameter annotations in TypeScript are used to specify the expected types of the parameter that a function takes.

// Regular Function
function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

// Arrow Function
const multiply = (x: number, y: number) => x * y;
const res = multiply(5, 3);
console.log(res);

// Also notice, TypeScript will give you warning if you provide more or less argument then you specify in your parameters area.