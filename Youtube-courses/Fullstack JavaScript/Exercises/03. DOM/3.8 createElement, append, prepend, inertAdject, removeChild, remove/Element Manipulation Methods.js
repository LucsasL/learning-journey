// Variables
const body = document.querySelector("body");

const list = document.querySelector("ul");
const listItems = document.querySelectorAll("li");

const firstP = document.querySelector("p");

const newList = document.querySelector(".newList");
const fourthLi = document.querySelector(".fourth");

// createElement()
const h1 = document.createElement("h1");
h1.textContent = "Hello, World!";
h1.classList.add("greetings");

console.log(h1);

const newLi = document.createElement("li");
newLi.innerText = "I'm list item tag!";

console.log(newLi);

const h4 = document.createElement("h4");
h4.innerText = "Lucsas";
h4.style.color = "crimson";

console.log(h4);

// appendChild()
body.appendChild(h1);
list.appendChild(newLi);

// selector.insertBefore(what, where);
list.insertBefore(newLi, listItems[0]);

// insertAdjacentElement(
// 'beforebegin'
// 'afterend'
// 'beforeend'
// 'afterend',
// element
// )
const italic = document.createElement("em");
italic.innerText = " I'm a text in Italic! ";
italic.style.color = "skyblue";

console.log(italic);

firstP.insertAdjacentElement("beforeBegin", italic);

// append()
const section = document.querySelector("section");
section.append(italic, h4);

console.log(section);

// prepend()
section.prepend(italic, h4);

// removeChild()
body.removeChild(h1);
newList.removeChild(fourthLi);

// remove
newList.remove();