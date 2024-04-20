// Once an interface is declared, it cannot be directly modified. However, TypeScript allows what is informally referred to as "declaration merging" or "interface extension", which is often misconstrued as "re-opening".

// Declaration merging in TypeScript refers to the ability to extend or argument an existing declaration, including interfaces. This can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration.

// Example

// Original interface
interface Car {
  brand: string;
  start(): void;
}

// Declaration of the extended interface
interface Car {
  model: string;
  stop(): void
}

// Usage of the extended interface / (Declaration Merging || Interface extensions)
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car started");
  },
  stop() {
    console.log("Car stopped");
  }
}

myCar.start();
myCar.stop();