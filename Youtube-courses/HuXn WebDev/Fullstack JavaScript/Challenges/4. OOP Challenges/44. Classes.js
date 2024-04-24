// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  };

  greet() {
    return `Hello, ${this.name}, level: ${this.level}.`;
  }
}

// 3. Create Instance of "hero" class
const saitama = new Hero("Saitama", "?");
console.log(saitama.greet());

// 4. Create New class name "Mage", inherit properties from "hero" class & provide property of spell
class Mage extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.name = name;
    this.level = level;
    this.spell = spell;
  }
}

// 5. Create instance of "Mega class"
const asriel = new Mage("Asriel", 500, "Fireball");
console.log(asriel.greet());