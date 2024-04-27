const fetchPromise = require("./Tests in Promises");

test("The data is \"Peanut Butter\"", () => {
  return expect(fetchPromise()).resolves.toBe("Peanut Butter");
});

test("The fetch fails with an error", () => {
  return expect(fetchPromise()).rejects.toThrow("error");
});