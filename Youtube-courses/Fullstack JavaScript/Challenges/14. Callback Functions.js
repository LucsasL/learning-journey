// 1. Create a function name (showCallFunc)
// 2. Pass "fn" as parameter
// 3. Inside that function, create variable which holds value of 10
// 4. Pass that value to the callback function
function showCallFunc(fn) {
  const num = 10;

  fn(num);
}

// 5. Now create callback function and print that value which you pass as parameter to the callback func.
showCallFunc(function (n) {
  console.log(n);
})