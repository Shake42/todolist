const inputTask = document.querySelector(".text__add");
const headerButton = document.querySelector(".header__btn");
const addButton = document.querySelector(".header__btn");
const taskContainer = document.querySelector(".tasks");

headerButton.addEventListener("click", function () {
  if (inputTask.value === "") {
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task");

  const checkbox = document.createElement("inputTask");
  checkbox.type = "checkbox";
  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";

  const title = document.createElement("span");
  title.textContent = inputTask.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.addEventListener("click", function () {
    task.remove();
  });

  task.append(checkbox);
  task.append(title);
  task.append(editBtn);
  task.append(deleteBtn);
  taskContainer.append(task);
});
