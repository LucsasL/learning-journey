// Create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

function createVehicle(type, brand, model, year) {
  return {
    type,
    brand,
    model,
    year
  };
}

const v1 = createVehicle("Car", "Toyota", "Camry", 2017);
const v2 = createVehicle("Motorcycle", "Honda", "idk", 2015);
console.log(v1);
console.log(v2);