// 1. Make a clone of "arr, arr2" by using spread operator
let arr = [1, 2, 3];
let arr2 = [4, 5];
const arr3 = [...arr, ...arr2];

console.log(arr3);

// 2. Make a clone of "user" object using spread operator
const user = {
  name: "Jen",
  Age: 22,
};

const userClone = {...user};

console.log(userClone);