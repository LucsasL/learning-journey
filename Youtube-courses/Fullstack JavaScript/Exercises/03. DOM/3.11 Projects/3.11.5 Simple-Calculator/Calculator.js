document.querySelector("#btn").addEventListener("click", () => {
  // Get elements from the DOM
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  let operator = document.querySelector("#selectOp").value;

  switch (operator) {
    case "+":
      result.innerHTML = `Result: <br> <span class="big">${Number(num1) + Number(num2)}</span>`;
      break;

    case "-":
      result.innerHTML = `Result: <br> <span class="big">${Number(num1) - Number(num2)}</span>`;
      break;

    case "/":
      result.innerHTML = `Result: <br> <span class="big">${Number(num1) / Number(num2)}</span>`;
      break;

    case "*":
      result.innerHTML = `Result: <br> <span class="big">${Number(num1) * Number(num2)}</span>`;
      break;
  }
})