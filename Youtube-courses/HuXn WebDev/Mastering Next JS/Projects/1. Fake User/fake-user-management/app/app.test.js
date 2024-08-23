const POST = require("/api/users/[id]/route");

const testVar = POST("http://localhost:3001/api/users/1");

test("Test the otput of an HTTP Request", () => {
  expect(testVar.id).toBe(1);
})