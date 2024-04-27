// toThrow Method

// It tests if the Errors in a function are being thrown to the users when input does not meet the software requirements or when some processes do not proceed as expected.

// It basically tells if the error handling message is being displayed to the users.
require("./throwError");

test("Throws on invalid input", () => {
  expect(() => {
    myFunction(invalidInput);
  }).toThrow();
});
