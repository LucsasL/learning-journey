// 1. Create a person constructor which has parameters of (name, age, gender)

// 2. Access parameter values to the call object.

// 3. Create a method name (info), which will just print the info.
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.info = function () {
    console.log(`Hello, my name is ${this.name} I'm ${age} years old and I'm a ${gender}.`);
  };
}

// 4. Create a few instances
const lucsas = new Person("Lucas", 18, "Male");
const jailson = new Person("Jailson", 45, "Male");

// 5. Access each property
lucsas.info();