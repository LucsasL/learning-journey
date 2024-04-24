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

async function showcaseUserHobbies() {
  try {
    const name = await getUserDataFromDB("Irineu");
    const hobbies = await getUserHobbies(name);
    console.log(hobbies);

  } catch (error) {
    console.log(error);
  }
}

console.log("End");

showcaseUserHobbies();