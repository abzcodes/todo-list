const addTodoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");

addTodoButton.addEventListener("click", () => {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";

  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", () => {
    toDoContainer.removeChild(paragraph);
  });
});
