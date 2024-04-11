// ES5 Code
function Animal(name) {
  this.name = name;
}

// Method shared among all Animal instances
Animal.prototype.makeSound = function (sound) {
  return sound != undefined ? sound : "Animal Sound";
}

// Subclass constructor inhering from Animal
function Dog(name) {
  Animal.call(this, name) // Call the superclass constructor
}

// Setup prototype chain for Dog to inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

// Method specific to Dog
Dog.prototype.makeSound = function () {
  return "Woof!";
}

// Creating Instances of the classes
const genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.name);
console.log(genericAnimal.makeSound());