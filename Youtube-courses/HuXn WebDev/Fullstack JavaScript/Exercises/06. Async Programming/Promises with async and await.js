function callbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `Inside (callbackHell) Function`;
      console.log(data);
      resolve(data);
    }, 2000);
  })
}

function firstFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed first.`;
      console.log("Inside (firstFunc) Function");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Second`;
      console.log("Inside (secondFunc) Function");
      resolve(processedData);
    }, 1500);
  })
}

async function processedDataWithAsyncAndAwait() {
  try {
    const data = await callbackHell();
    const processedData1 = await firstFunc(data);
    const processedData2 = await secondFunc(processedData1);
    console.log(`Final result of all function with async and await: ${processedData2}`);
    
  } catch (error) {
    console.error(error);
  }
}

processedDataWithAsyncAndAwait();