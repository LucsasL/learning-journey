console.log(window);
console.log(this); // Window Object
console.log(this === window); // true

window.firstName = "Lucsas";
this.lastName = "Lira";
console.log(window);

// ------------------------------------------

function printThis() {
  return this;
}

const res = printThis();
console.log(res);

// ------------------------------------------

const obj = {
  firstName: "Lucsas",
  lastName: "Lira",
  fullName: function () {
    return `${firstName} ${lastName}`; // "owner" obj
  }
}

const res2 = obj.fullName();

console.log(res2);

// ------------------------------------------

const obj2 = {
  firstName: "Lucsas",
  lastName: "Lira",
  fullName: () => {
    return this; // Window object
  },
};

const res3 = obj2.fullName();

console.log(res3);