// Modifiers

// public
// protected ("_" Before variable name)
// private  ("_" Before variable name)

function MyClass(publicField, privateField, protectedField) {
  // Public Field
  this.publicField = publicField;

  // Private Field (closure)
  const _privateField = privateField;

  // Protected Field
  const _protectedField = protectedField;

  // Public Methods
  this.publicMethod = function () {
    return `Public Field ${this.publicField}`;
  };

  // Private Method (Closure)
  function _privateMethod() {
    return `Private Method ${_privateField}`;
  };

  // Protected Method (Closure)
  function _protectedMethod() {
    return `Protected Method ${_protectedField}`;
  };

  // Method to access protected method
  this.accessProtectedMethod = function () {
    return _protectedMethod();
  };
}

const myObject = new MyClass("Public Data", "Private Data", "Protected Data");

console.log(myObject.publicField);
console.log(myObject._privateField);
console.log(myObject._protectedField);

console.log("-------------------------------------");

console.log(myObject.publicMethod());
// console.log(myObject._privateMethod());
console.log(myObject.accessProtectedMethod());