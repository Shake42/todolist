const input = document.querySelector(".text__add");
const header__btn = document.querySelector(".header__btn");
const addButton = document.querySelector(".header__btn");
const taskContainer = document.querySelector(".tasks");

const tasks = document.createElement("div");
tasks.classList.add("task");

header__btn.addEventListener("click", function () {
  const task = document.createElement("div");
  task.classList.add("task");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";

  const title = document.createElement("span");
  title.textContent = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  taskContainer.append(task);
  task.append(checkbox);
  task.append(title);
  task.append(editBtn);
  task.append(deleteBtn);
});
