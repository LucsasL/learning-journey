// toBeFalsy Method

// It expects to return a falsy value. A falsy value is a value which contains a falsy type, as undefined, null or 0 (zero).
test("Null is falsy", () => {
  const n = null;

  expect(n).toBeFalsy();
});
