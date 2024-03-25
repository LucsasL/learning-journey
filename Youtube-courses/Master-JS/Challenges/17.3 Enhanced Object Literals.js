function getPersonES6(name, age, height) {
  return { name, age, height };
}

const res = getPersonES6("Lucas", 18, 200);
console.log(res);
// Expected output: { name: 'Lucas', age: 18, height: 200 }