async function printInDocument() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    if (!response.ok) throw Error(response.statusText);
    
    resultCont.innerHTML = `My name is ${data.name} and I'm ${data.age} years old.`;

  } catch (error) {
    console.log(error);
  }
}

const resultCont = document.querySelector(".result2");


printInDocument();