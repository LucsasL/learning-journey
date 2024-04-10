// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;

    this.greet = function () {
      return `Hello, ${this.name}, level: ${this.level}.`;
    }
  };
}

// 3. Create Instance of "hero" class
const saitama = new Hero("Saitama", "?");

// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
class Mega extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.name = name;
    this.level = level;
    this.spell = spell;
  }
}

// 5. Create instance of "Mega class"
const batman = new Mega("Bruce Wayne", 500);
console.log(batman.greet());