// BONUS => REFACTOR
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "Iphone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const product = products.find((product) => product.category === "Books");

console.log(product);