// Storing  the DOM Elements in variables
const panel = document.querySelector("#panel");
const ratings = document.querySelectorAll(".ratings");
const ratingsContainer = document.querySelector(".ratings-container");
const sendButt = document.querySelector("#send");

let selectRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    let activeDivs = document.querySelectorAll(".active");
    removeActive();

    e.target.parentNode.classList.toggle("active");
    selectRating = e.target.nextElementSibling.innerHTML;

    if (activeDivs.length > 0) {
      activeDivs.forEach(item => item.classList.remove("active"));
    }
  }
});

sendButt.addEventListener("click", () => {
  panel.innerHTML = `
    <p class="heart">💖</p>
    <strong>Thank You!</strong> <br />
    <p> Feedback? ${selectRating} </p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
