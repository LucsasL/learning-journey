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

const dog1 = new Dog("Buddy");
console.log(dog1);
console.log(dog1.name);
console.log(dog1.makeSound());

// ES6 Classes

// Superclass

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  makeSound(sound) {
    return sound != undefined ? sound : `Unknown Sound`;
  }
}

// Subclass inheriting from Animal
class Dog extends Animal2 {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Woof!";
  }
}

const generic = new Animal("Generic Animal 2");
console.log(generic.makeSound());

const dog2 = new Dog("Buddy 2");
console.log(dog2.makeSound());
