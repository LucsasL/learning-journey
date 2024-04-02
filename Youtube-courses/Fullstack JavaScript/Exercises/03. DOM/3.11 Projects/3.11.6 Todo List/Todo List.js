const todoCont = document.querySelector(".todos");
const form = document.querySelector("form");
const todoInput = document.querySelectorAll("input");

todoCont.appendChild(list);

function getTodo() {
  // Creating new elements
  const list = document.createElement("ul");
  const todoLi = document.createElement("li");

  // Settings values and styles
  todoLi.innerText = todoInput[0].value;

  // Append out elements to the DOM
  todoCont.appendChild(list);
  list.appendChild(todoLi);

  let closeEl = document.createElement("li");
  closeEl.innerHTML = "&times;";
  closeEl.classList.add("delete");

  // Attach events
  closeEl.addEventListener("click", (e) => {
    todoCont.removeChild(todoLi);
  });

  todoLi.appendChild(closeEl);
  todoLi.classList.add("todo");
  return todoLi;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = todoInput.value;
  if (!value.trim()) {
    return;
  }

  todoLi.appendChild(getTodo(value));
  todoInput.value = "";
});
