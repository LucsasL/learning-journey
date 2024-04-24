// 1. At the middle of start and End do this 👇
console.log("Start");

// -> Create a function name (getUserDataFromDB) which will take name and callback as parameters
// --> use seTimeOut() & print "Getting User Name" & then pass your name as an argument to a callback parameter. This process should take 2.
function getUserDataFromDB(name, callback) {
  setTimeout(() => {
    console.log("Getting User Name...");
    callback(name);
  }, 2000);
}

// -> Create a function name (getUserHobbies) which will take name and callback as parameter
// --> Use setTimeOut() & print "Getting User Hobbies" & then pass your hobbies array as an argument to callback parameter. This process should also take 2s
function getUserHobbies(name, callback) {
  setTimeout(() => {
    console.log("Getting User Hobbies...");
    const hobbies = ["Code", "Play", "Read", "Walk"];
    callback(hobbies);
  }, 2000);
}

// -> Execute getUserDataFromDB function & pass your name for the first parameter & callback function for the second argument and this callback function should also take a (data) parameter.
// --> In that callback function log (data) to the console
// --> Execute getUserHobbies function and pass your data param and also pass another callback function which will take hobby as a parameter and just log that parameter to the console, run the code and see the result.
getUserDataFromDB("Lucsas", (data) => {
  console.log(data);
  getUserHobbies(data, (hobbies) => {
    console.log(hobbies);
  });
});

console.log("End");