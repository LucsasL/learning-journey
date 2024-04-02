const container = document.querySelector(".container");
const h1 = document.querySelector(".main-headings");
const p = document.querySelector(".sub-headings");
const btn = document.querySelector(".btn");

// 1. Provide "400px" of height to the container element
container.style.height = "400px";

// 2. Change the background color of container to "teal"
container.style.background = "teal";

// 3. Change the color of h1 to "skyblue"
h1.style.color = "skyblue";

// 4. Change the fontFamily of paragraph to "sans-serif"
p.style.fontFamily = "sans-serif";

// 5. Change the color of paragraph to "white"
p.style.color = "white";

// 6. Change the color of btn to pink
btn.style.color = "pink";

// BONUS
btn.setAttribute("href", "https://github.com/lucsasl");
