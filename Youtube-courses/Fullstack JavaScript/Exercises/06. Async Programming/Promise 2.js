function CallbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (CallbackHell) Function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed data`;
      console.log("Inside (firstFunc) Function");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed data`;
      console.log("Inside (secondFunc) Function");
      resolve(processedData);
    }, 1500);
  });
}

CallbackHell("Irineu")
  .then((data) => firstFunc(data))
  .then((processedData1) => secondFunc(processedData1))
  .then((processedData2) =>
    console.log(`Final result of all function with Promises: ${processedData2}`)
  )
  .catch((error) => console.error(error));
