// https://w3scholls.com/jsref/obj_keyboardevent.asp

const input = document.querySelector("input");

// Key pressed Event
input.addEventListener("keypress", () => {
  console.log("Key pressed");
});

// // Keyup Event
input.addEventListener("keyup", () => {
  console.log("Keyup");
});

// // Keydown Event
input.addEventListener("keydown", () => {
  console.log("Keydown");
});

// Useful Properties and methods
input.addEventListener("keypress", e => {
  console.log(e.code);
  console.log(e.ctrlKey);
  console.log(e.key);
})