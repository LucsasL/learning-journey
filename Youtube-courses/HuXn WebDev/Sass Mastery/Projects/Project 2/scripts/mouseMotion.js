const mouseDiv = document.querySelector(".mouse");
const header = document.querySelector("h1");

document.addEventListener("mousemove", e => {
  const posX = e.clientX;
  const posY = e.clientY;

  mouseDiv.style.left = `${posX - 3}px`;
  mouseDiv.style.top = `${posY - 2}px`;

  if (mouseDiv.clientX != e.clientX) {
    mouseDiv.style.top = 5;
  }
  
  if (mouseDiv.clientY != e.clientY) {
    mouseDiv.clientY = e.clientY;    
  }
});

header.addEventListener("mouseover", () => {
  mouseDiv.classList.add("scale");
});

header.addEventListener("mouseout", () => {
  mouseDiv.classList.remove("scale");
});