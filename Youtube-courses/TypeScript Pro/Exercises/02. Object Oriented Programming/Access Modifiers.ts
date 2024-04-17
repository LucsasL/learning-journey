// In TypeScript, you can use access modifiers to control the visibility of class members (properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class.

// These are three types of access modifiers in TypeScript
// -> Public
// Members marked as public can be accessed from anywhere, both inside and outside the class.

// -> Private
// Members marked as private can only be accessed from within the class they are defined in.

// -> Protected
// Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

// Example
class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getSpecies(): string {
    return this.species;
  }

  public makeSound(sound: string = "Animal Sound"): string {
    return sound;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Pug");
  }
}

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Black");
  }
}

const animal = new Animal("Buddy", 12, "Pug");

const animalSound = animal.makeSound();
console.log(animalSound);

const dog = new Dog("Buddy", 8);

console.log(dog.makeSound("Woof!"));
console.log("-------------------------------");

// Practical Example
class Person {
  public firstName: string;
  public lastName: string;
  protected age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    return this.age;
  }
}

class Lucsas extends Person {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }
}

const person = new Person("Irineu", "Não sabe nem eu", 32);

console.log(person.getFullName());
console.log(person.getAge());
console.log("-------------------------------");

const lucsas = new Lucsas("Lucas", "Lira", 18);

console.log(lucsas.getFullName());
console.log(lucsas.getAge());