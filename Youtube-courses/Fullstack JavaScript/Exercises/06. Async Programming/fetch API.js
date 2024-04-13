// text method returns promise
// if resolve will return text representation of body

// Fetch API promise will only rejects when we have networks error(not in other cases).

const result = document.querySelector(".result");

async function renderData() {
  try {
    const response = await fetch("text.txt");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.text();
    result.innerHTML = `<span>${data}</span>`;
    
  } catch (error) {
    console.log(error);
  }
}

renderData();

console.log(fetch("text.txt"));