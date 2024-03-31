// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all numbers in the array.

const numbers = [1, 2, 3 ,4, 5];

// Write the calculateProduct function using reduce() method to achieve this task.
function calculateProduct(arr) {
  const product = arr.reduce((p, c) => {
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c}`);
    console.log(`Value: ${p * c}`);
    console.log("--------------------");
    return p * c;
  });
  
  return product;
}

const product = calculateProduct(numbers);

console.log(product);