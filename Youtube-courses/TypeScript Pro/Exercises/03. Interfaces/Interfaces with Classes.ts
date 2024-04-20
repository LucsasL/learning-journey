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
car1.start();
car1.stop();