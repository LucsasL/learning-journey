const fetchPromise = require("./Async Functions Testing");

test('The data is "Peanut Butter"', async () => {
  const data = await fetchPromise();
  expect(data).toBe("Peanut Butter");
});
