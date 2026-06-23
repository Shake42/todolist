const inputTask = document.querySelector(".text__add");
const headerButton = document.querySelector(".header__btn");
const addButton = document.querySelector(".header__btn");
const taskContainer = document.querySelector(".tasks");
const completedButton = document.querySelector('.completed');
const incompletedButton= document.querySelector('.incompleted');
const allButton = document.querySelector('.all');
let arrayTodos = [
  {
    id: 1,
    text: "Learn JS",
    completed: false,
  },
  { 
    id: 2,
    text: "skibidi", 
    completed: true 
  },
  { 
    id: 3, 
    text: "left kick", 
    completed: true 
  },
];

headerButton.addEventListener("click", createTask);
completedButton.addEventListener('click', completedTask);
incompletedButton.addEventListener('click',inCompletedTask);
allButton.addEventListener('click', allTask)
function completedTask(){
  let completedTask = arrayTodos.filter(function(elem){
    if (elem.completed === true)
      return elem;
  });
  render(completedTask);  
}

function inCompletedTask(){
  let inCompletedTask = arrayTodos.filter(function(elem){
    if (elem.completed===false)
      return elem;


  });
  render (inCompletedTask);
}

function allTask(){
  let allTask = arrayTodos.filter(function(elem){
    if (elem.completed===true || elem.completed===false)
      return elem;
  });
  render (allTask);
}



function render(todos = arrayTodos) {
  taskContainer.innerHTML = "";

  todos.forEach((todo) => {
    const task = document.createElement("div");
    task.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    const title = document.createElement("p");
    title.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.dataset.id = todo.id; 
    deleteBtn.addEventListener("click", deleteTask);

    task.append(checkbox);
    task.append(title);
    task.append(deleteBtn);

    taskContainer.append(task);
  });
}

function createTask() {
  const newTodo = {
    id: Date.now(),
    text: inputTask.value,
    completed: false,
  };

  arrayTodos.push(newTodo);
  render();
}

function deleteTask(event){
  let deleteBtn = event.target; 
  arrayTodos = arrayTodos.filter(todo => todo.id !== Number(deleteBtn.dataset.id));
  render();
  console.log(Number(deleteBtn.dataset.id));

}





render();
