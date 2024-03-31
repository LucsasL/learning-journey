// 1. Iterate over "ages" array
// 2. Print only adults, those whose age is greater then 18

const ages = [32, 33, 16, 40];

function checkAdults(age) {
  return age >= 18;
}

const res = ages.filter(checkAdults);
console.log(res);