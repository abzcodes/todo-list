const inputField = document.getElementById("inputField");
const btn = document.getElementById("btn");
const todoContainer = document.getElementById("todo-container");

btn.addEventListener("click", () => {
  let element = document.createElement("li");
  element.innerText = inputField.value;
  if (inputField.value === "") {
    return;
  }
  todoContainer.appendChild(element);
  element.style.color = "purple";
  todoContainer.classList.add("container-list");

  element.addEventListener("click", () => {
    element.style.textDecoration = "line-through";
  });

  element.addEventListener("dblclick", () => {
    todoContainer.removeChild(element);
  });
});
