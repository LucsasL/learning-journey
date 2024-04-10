// In JavaScript, we can achieve encapsulation by using closures to create private members.

function Counter() {
  let _count = 0; // Private variable

  // Public method that can access and modify the private variable
  this.increment = function () {
    _count++;
  };

  this.decrement = function () {
    _count--;
  };

  this.getCount = function () {
    return _count;
  }
}

const counter = new Counter();
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3

console.log(counter.getCount()); // counter == 0 + 1 + 1 + 1

counter.decrement(); // 2

console.log(counter.getCount()); // counter == 0 + 1 + 1 + 1 - 1

console.log(counter);