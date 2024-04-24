// 1. Create a symbol provide a value of "foo"
const symbol = Symbol();

// 2. Check the type of that symbol
console.log(typeof symbol);

// 3. Create empty object
const obj = {
  firstName: "Alex",
  lastName: "Mead"
};

// 4. Store symbol as the property to that object.
obj[Symbol("foo")] = "IDK";
console.log(obj);

for (let i in obj) {
  console.log(i);
}