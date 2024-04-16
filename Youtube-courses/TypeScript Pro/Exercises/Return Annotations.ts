// Regular Function
function square(x: number): number {
  return x * x;
}

const res = square(8);
console.log(res);

// Arrow Function
const square2 = (x: number): number => x * x;
const res2 = square2(5);
console.log(res2);