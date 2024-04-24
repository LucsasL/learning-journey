let firstLi = document.querySelector("li");
let list = document.querySelector("ul");
let fourthLi = document.querySelector(".fourth");

// Taking parent element
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement.parentElement);

// Taking children
console.log(list.children);
console.log((list.children[0].innerText = "One"));

// Next elements
console.log(firstLi.nextElementSibling.textContent);

// Previous elements
console.log(fourthLi);
console.log(fourthLi.previousElementSibling);
