interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("Car is starting...");
  }

  stop(): void {
    console.log("Car is stopped");
  }
}

const car1 = new Car();
console.log(car1.start());
console.log(car1.stop());