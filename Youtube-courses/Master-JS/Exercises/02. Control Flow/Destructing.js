// Destructing allows us to "unpack" values from data-structures (Arrays, objects) into separate distinct variables.

const foo = ["One", "Two", "Three"];

const [one, two, three] = foo;
console.log(one);
console.log(two);
console.log(three);

const [red, yellow, green, blue] = foo;
console.log(red);

let a, b;
[a = 5, b = 8] = ["One"];

console.log(b);

function f() {
  return [1, 2];
}

let c, d;
[c, d] = f();
console.log(c);
console.log(d);

function g() {
  return [1, 2, 3];
}

const [e, , h] = g();

console.log(e);
console.log(h);