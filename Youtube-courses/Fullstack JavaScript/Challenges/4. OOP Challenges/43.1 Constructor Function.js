// EXERCISE 2

// In this exercise, you will create a constructor function called Car that represents a car with specific properties such as make, model, year, and color. Additionally you will define two methods, start and stop, to simulate starting and stopping the car

// -> Define the Car constructor function that takes four parameters: make, model, year, and color.

// -> Inside the Car constructor, use this to assign the parameters to the corresponding properties of the object being created.

// -> Define a method called start as a property of the object. The start method should return a string message like "Starting the Toyota Camry..." where "Toyota" is the make and "Camry" is the model of the car.

// -> Define another method called stop as a property of the object. The stop method should return a string message like "Stopping the Honda CR-V." where "Honda" is the make and "CR-V" is the model of the car.

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.start = function () {
    console.log(`Starting the ${make} ${model}...`);
  };
  this.stop = function () {
    console.log(`Stopping the ${make} ${model}.`);
  };
}

// -> Create two car instances (car1 and car2) using the Car constructor with different properties.
const car1 = new Car("Toyota", "Camry", 2024, "Silver");
const car2 = new Car("Honda", "CR-V", 2020, "Red");

// -> Test the methods by calling car1.start() and car2.stop(). Observe the output and make sure the messages display the correct make and model of the cars.
car1.start();
car2.stop();