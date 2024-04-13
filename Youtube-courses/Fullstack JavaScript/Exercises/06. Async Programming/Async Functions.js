// Async
// async is keyword use to turn function declaration to async function.

// Await
// The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code.

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve("User data retrieved from the server. ");
    }, 4000);
  });
}

async function getUserData() {
  try {
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("Remaining task can be executed here.")

  } catch (error) {
    console.log(error);
  }
}

getUserData();