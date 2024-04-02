const todoCont = document.querySelector(".todos ul");
const form = document.querySelector("form");
const todoInput = document.querySelectorAll("input");
const todoLi = document.createElement("li");

todoInput[1].addEventListener("submit", e => {
  e.preventDefault();
  todoLi.innerText = todoInput[0].value;
  todoCont.appendChild(todoLi);
})