// Refactor the code below

console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Getting User Name...");
      console.log("Valid Name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Getting User Hobbies...");
      resolve(["Code", "Play", "Read", "Walk"]);
    }, 2000);
  });
}

getUserDataFromDB("Irineu").then((name) => {
  console.log(name);
  getUserHobbies(name).then((hobby) => console.log(hobby));
});

console.log("End");
