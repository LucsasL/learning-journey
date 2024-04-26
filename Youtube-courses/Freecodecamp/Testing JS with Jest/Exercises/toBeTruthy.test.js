// toBeTruthy Method

// It expects to return a truthy value. A truthy value is a value which contains a truthy type, as a defined value like strings, any number different than 0 and objects.
test("0 + 1 is truthy", () => {
  const n = 0;

  expect(n + 1).toBeTruthy();
});
