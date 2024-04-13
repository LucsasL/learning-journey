// In JavaScript, try and catch are keywords used to implement error handling. Error handling is essential when writing code to gracefully handle unexpected errors and exceptions that may occur during program execution. The try and catch blocks works together to enable developers to catch and handle errors, preventing them from crashing the entire application.

function parseJSON(jsonString) {
  try {
   return JSON.parse(jsonString);
  
  } catch (error) {
    console.log(`An error occurred while parsing JSON: ${error.message}`);
    return null;
  }
}

const validJSON = '{"name": "Irineu", "age": 18}';
const invalidJSON = '{"name": "Irineu", "age": 18,}';
const result1 = validJSON;
const result2 = invalidJSON;

console.log(parseJSON(result1));
console.log(parseJSON(result2));