const body = document.body;
const button = document.querySelector(".btn");

const clickHandler = () => {
  if (body.style.background === "crimson") {
    body.style.background = "blue";
  } else {
    body.style.background = "crimson";
  }
};

clickHandler();

button.addEventListener("click", clickHandler);