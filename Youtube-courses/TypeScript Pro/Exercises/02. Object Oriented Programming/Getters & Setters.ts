// Getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

// Example
class myClass {
  constructor() {}

  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be negative");
    }

    this._myProperty = value;
  }
}

const myInstance = new myClass();

console.log(`Current value: ${myInstance.myProperty}`);
myInstance.myProperty = 10;

console.log(`Current value: ${myInstance.myProperty}`);
