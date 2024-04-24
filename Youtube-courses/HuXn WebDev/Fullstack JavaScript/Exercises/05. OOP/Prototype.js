// Every JavaScript object has a anonymous property called prototype

// Remember functions & arrays are also an object

// That prototype will be the parent of that object, prototype property is an object by itself, which have same special properties & method

// Every object is associated with another object. The object (obj) is associated with [[Prototype]] Object

// -> Which means "obj" object will inherit all properties of Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:
// -> obj.__proto__;
// -> obj.constructor.prototype;
// -> Object.getPrototype(obj);

const obj = {};
console.log(obj);
console.log(obj.__proto__);
console.log(obj.constructor.prototype);
console.log(Object.getPrototypeOf(obj));

const arr = new Array("Hello", "Yello", "Bla");
console.log(arr);

function Person(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
}

const perInst = new Person("Lucas", "Lira", "C");
console.log(perInst.__proto__.__proto__.__proto__);

// -------------------------------------------
// Changing the built-in Method

Array.prototype.pop = function () {
  return "POP IT UP!";
}

const myArr = [1, 2, 3];

console.log(myArr.pop()); // LOL :D
console.log(myArr);

// -------------------------------------------

String.prototype.hello = function () {
  console.log(this);
  console.log(this.toUpperCase());
}

console.log("Hello and welcome".hello());