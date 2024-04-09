// A Factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

function createPerson(firstName, lastName, PL) {
  return {
    firstName,
    lastName,
    PL,
    intro: function () {
      console.log(
        `Hello, my name is ${this.firstName} ${this.lastName} & I love ${this.PL}.`
      );
    }
  };
}

const john = createPerson("John", "Doe", "Python");
const lucsas = createPerson("Lucas", "Lira", "JavaScript");
console.log(john);