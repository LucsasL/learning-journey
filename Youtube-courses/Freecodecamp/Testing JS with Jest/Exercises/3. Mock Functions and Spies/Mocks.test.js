test("Mock Implementation of a basic function", () => {
  const mock = jest.fn((x) => 42 + x);

  expect(mock(1)).toBe(43);

  // toHaveBeenCalledWith() Method: It checks if the function were called in the way the parameters say it was.
  expect(mock).toHaveBeenCalledWith(1);
});