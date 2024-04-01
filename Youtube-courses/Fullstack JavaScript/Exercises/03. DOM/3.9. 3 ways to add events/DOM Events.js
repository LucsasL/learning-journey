// Variables
const body = document.querySelector("body");
const secondBtn = document.querySelector(".second-btn");
const bestBtn = document.querySelector(".best");
const name = document.createElement("h5");
const para = document.querySelector(".para");
const input = document.querySelectorAll("input");

name.innerText = "Lucsas :D";
name.style.color = "blue";

// Bad Way
secondBtn.onclick = function () {
  console.log("Lucsas :D");
  body.appendChild(name);
  input[0].setAttribute("value", "Learn More");
};

// Great Way
bestBtn.addEventListener("click", () => {
  alert("Good job! ;D");
  input[0].setAttribute("value", "Best Way");
})

// Event Object
para.addEventListener("click", (event) => {
  console.log(event);
})

input[1].addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
})

input[0].setAttribute("placeholder", "I did it!");