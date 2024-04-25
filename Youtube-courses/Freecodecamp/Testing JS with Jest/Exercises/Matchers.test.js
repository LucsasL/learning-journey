// Matchers

// toBe(): Matcher that can analyze strings, numbers and booleans

// The matcher will check if the operation inside the expect() will be true, if it is then it will pass the test.
test("Two plus Two is Four", () => {
  expect(2 + 2).toBe(4);
});