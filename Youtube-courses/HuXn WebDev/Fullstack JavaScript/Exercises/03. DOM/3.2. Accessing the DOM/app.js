// ----- DOM Selectors -----

// 1. getElementByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// 2. getElementById
console.log(document.getElementById("main"));

// 3. getElementByClassName
console.log(document.getElementsByClassName("cls"));

// 4. querySelector
console.log(document.querySelector(".cls-1"));

// 5. querySelectorAll
console.log(document.querySelectorAll("li"));

// -----------------------------
console.log("--------- Storing data in variables ---------");


const h1 = document.querySelector("h1");
console.log(h1);

const listItems = document.querySelectorAll("li");
console.log(listItems);
