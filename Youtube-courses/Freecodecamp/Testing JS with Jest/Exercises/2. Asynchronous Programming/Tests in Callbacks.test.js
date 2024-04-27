const fetchData = require("./Tests in Callbacks");

test("The data is \"Peanut Butter\"", done => {
  function callback(data) {
    try {
      expect(data).toBe("Peanut Butter");
      done();
      
    } catch (error) {
      done(`The data didn't work. Error: ${error} `);
    }
  }

  fetchData(callback);
});