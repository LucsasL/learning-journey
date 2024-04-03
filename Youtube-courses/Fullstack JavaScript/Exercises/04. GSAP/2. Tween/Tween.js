// import gsap from "gsap";

const box = document.querySelector(".box");

// gsap.to(box, {
//   x: 150,
//   duration: 2,
//   repeat: -1
// })

document.addEventListener("click", () => {
    box.classList.toggle("move");
})