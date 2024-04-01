// Variables
const body = document.querySelector("body");
const secondBtn = document.querySelector(".second-btn");
const bestBtn = document.querySelector(".best");
const name = document.createElement("h5");

name.innerText = "Lucsas :D";
name.style.color = "blue";

// Bad Way
secondBtn.onclick = function () {
  console.log("Lucsas :D");
  body.appendChild(name);
};

// Great Way
bestBtn.addEventListener("click", () => {
  alert("Good job! ;D");
})

// Event Object
