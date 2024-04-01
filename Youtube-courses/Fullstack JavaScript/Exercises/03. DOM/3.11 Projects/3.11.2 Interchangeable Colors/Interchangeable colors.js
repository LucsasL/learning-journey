const body = document.querySelector("body");
const buttons = document.querySelectorAll(".btn");

document.addEventListener("click", e => {
  for (let i = 0, buttLen = buttons.length; i < buttLen ; i++) {
    if (e.target === buttons[i]) {
      body.style.background = buttons[i].value;
    }
  }
})