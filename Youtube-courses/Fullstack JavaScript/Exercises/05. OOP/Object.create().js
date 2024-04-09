// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

let person = {
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
}

const lucas = Object.create(person);
lucas.firstName = "Lucsas";
lucas.lastName = "Lira";
lucas.greet();

const john = Object.create(person, {
  firstName: {value: "John"},
  lastName: {value: "Doe"},
});


john.greet();