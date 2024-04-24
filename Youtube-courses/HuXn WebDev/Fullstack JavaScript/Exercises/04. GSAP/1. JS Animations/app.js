const button = document.querySelector("button");
const sideBar = document.querySelector(".sidebar");

button.addEventListener("click", () => {
  sideBar.classList.toggle("hidden");
})