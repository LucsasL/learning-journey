// Storing  the DOM Elements in variables
const panel = document.querySelector("#panel");
const ratings = document.querySelectorAll(".ratings");
const ratingsContainer = document.querySelector(".ratings-container");
const sendButt = document.querySelector("#send");

let selectRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    console.log(e.target.parentNode.classList.contains("rating"));
  }
});
