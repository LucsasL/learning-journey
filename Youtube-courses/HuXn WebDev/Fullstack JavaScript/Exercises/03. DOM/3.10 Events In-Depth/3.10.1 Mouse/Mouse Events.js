// https://w3schools.com/jsref/obj_mouseevent.asp

// Variables
const click = document.querySelector(".click");
const contextMenu = document.querySelector(".contextMenu");
const dblClick = document.querySelector(".dblClick");
const mouseDown = document.querySelector(".mouseDown");
const mouseEnter = document.querySelector(".mouseEnter");
const mouseLeave = document.querySelector(".mouseLeave");
const mouseMove = document.querySelector(".mouseMove");
const mouseOut = document.querySelector(".mouseOut");
const mouseOver = document.querySelector(".mouseOver");
const mouseUp = document.querySelector(".mouseUp");

// 1. click
click.addEventListener("click", () => {
  click.classList.toggle("red");
});

// 2. contextMenu
contextMenu.addEventListener("contextmenu", () => {
  contextMenu.classList.toggle("blue");
});

// 3. dbClick
dblClick.addEventListener("dblclick", () => {
  dblClick.classList.toggle("teal");
});

// 4. mouseDown
mouseDown.addEventListener("mousedown", () => {
  mouseDown.classList.toggle("steelblue");
});

// 5. mouseEnter
mouseEnter.addEventListener("mouseenter", () => {
  mouseEnter.classList.toggle("orange");
});

// 6. mouseLeave
mouseLeave.addEventListener("mouseleave", () => {
  mouseLeave.classList.toggle("purple");
});

// 7. mouseMove
mouseMove.addEventListener("mousemove", () => {
  mouseMove.classList.toggle("pink");
});

// 8. mouseOut
mouseOut.addEventListener("mouseout", () => {
  mouseOut.classList.toggle("crimson");
});

// 9. mouseOver
mouseOver.addEventListener("mouseover", () => {
  mouseOver.classList.toggle("chocolate");
});

// 10. mouseUp
mouseUp.addEventListener("mouseup", () => {
  mouseUp.classList.toggle("aqua");
});
