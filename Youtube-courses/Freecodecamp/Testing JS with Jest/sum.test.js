const sum = require("./sum");

test("It takes two numbers and returns the addition of them.", () => {
  expect(sum(1, 2)).toBe(3);
});