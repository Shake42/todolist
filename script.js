const inputTask = document.querySelector(".text__add");
console.log(inputTask.type);
console.log(inputTask.value);
console.log(inputTask.classList[0]);
const headerButton = document.querySelector(".header__btn");
const addButton = document.querySelector(".header__btn");
const taskContainer = document.querySelector(".tasks");
const completedButton = document.querySelector(".completed");
const incompletedButton = document.querySelector(".incompleted");
const allButton = document.querySelector(".all");
let arrayTodos = [
  {
    id: 1,
    text: "Learn JS",
    completed: false,
  },
  {
    id: 2,
    text: "skibidi",
    completed: true,
  },
  {
    id: 3,
    text: "left kick",
    completed: true,
  },
];

headerButton.addEventListener("click", createTask);
completedButton.addEventListener("click", completedTask);
incompletedButton.addEventListener("click", inCompletedTask);
allButton.addEventListener("click", allTask);


function completedTask() {
  let completedTask = arrayTodos.filter(function (elem) {
    if (elem.completed === true) return elem;
  });
  render(completedTask);
}

function inCompletedTask() {
  let inCompletedTask = arrayTodos.filter(function (elem) {
    if (elem.completed === false) return elem;
  });
  render(inCompletedTask);
}

function allTask() {
  let allTask = arrayTodos.filter(function (elem) {
    if (elem.completed === true || elem.completed === false) return elem;
  });
  render(allTask);
}

function render(todos = arrayTodos) {
  taskContainer.innerHTML = "";

  todos.forEach((todo) => {
    const task = document.createElement("div"); // создается див в переменной таск 
    task.classList.add("task");     // присваивается класс таск 
    const taskTitle = document.createElement('div');  // создается див тайтл
    taskTitle.classList.add('task-title'); // добавляем ему класс
    const checkbox = document.createElement("input"); // создаем чекбокс
    checkbox.type = "checkbox"; // указываем ему тип
    checkbox.checked = todo.completed;  // если чекбокс нажат то таска завершена 

    checkbox.addEventListener("change", function () { // делаем функциб когда стоит галочка
      todo.completed = checkbox.checked; // сохраняем чекбокс
    });

    const title = document.createElement("span"); // создаем спан
    title.textContent = todo.text; // указываем текст внутри спана
    taskTitle.append(checkbox); // засовываем чекбокс внутрь тайтла контейнера
    taskTitle.append(title);   //ставим тайтл рядом с чекбоксом 
    
    
    const taskBtn = document.createElement('div');   //контейнер для кнопок
    taskBtn.classList.add('task-btn');    // даем ему классс

    const editBtn = document.createElement("button"); //создаем едит баттон
    editBtn.textContent = "edit"; // даем ей текст едит 
    editBtn.dataset.id = todo.id;  // сохраняем туду внутри кнопки 
    editBtn.addEventListener("click", editTask);  // функция эдиттаск

    function editTask(event) {
      let editBtn = event.target;
      let id = editBtn.dataset.id;
      let todo = arrayTodos.find(function (item) {
        return item.id === Number(id);
      });
      let newText = prompt("Edit task", todo.text);

      todo.text = newText;

      render();   //вызываем функцию 
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.dataset.id = todo.id;
    deleteBtn.addEventListener("click", deleteTask);
     
    taskBtn.append(editBtn);
    taskBtn.append(deleteBtn);
    task.append(taskTitle);
    task.append(taskBtn);
    taskContainer.append(task);
  });
}

function createTask() {
  if (inputTask.value === ''){
    alert('task can not be created');
    return;
  }
  const newTodo = {
    id: Date.now(),
    text: inputTask.value,
    completed: false,
  };
  arrayTodos.push(newTodo);
  inputTask.value = '';
  
  render();
}

function deleteTask(event) {
  let deleteBtn = event.target;
  arrayTodos = arrayTodos.filter(
    (todo) => todo.id !== Number(deleteBtn.dataset.id),
  );
  render();
  console.log(Number(deleteBtn.dataset.id));
}

render();
