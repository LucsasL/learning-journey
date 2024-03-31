// REFACTOR → USE EVERY & SOME HELPERS
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "Iphone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

// Do all products have a category of books?
const allProductsBooks = products.every(product => {
  return product.category === "Books";
});

// Do some products have a category of books?
const someProductsBooks = products.some(product => {
  return product.category === "Books";
});

console.log(allProductsBooks);
console.log(someProductsBooks);