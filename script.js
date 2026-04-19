//DOM
let addTaskBtn = document.querySelector(".add-task-btn");
let labelInput = document.querySelector("#input-title");
let taskText = document.querySelector(".task-text");
let tasksUl = document.querySelector(".tasks-ul");
let userName = document.querySelector("h1");
let newTaskBtn = document.querySelector('#new-task-btn')
let inputTaskEl = document.querySelector('.input-task')
let container = document.querySelector('.container')
let cancelBtn = document.querySelector('.cancel-btn')
let inputDesc = document.querySelector('#input-desc')
let fullTask =document.querySelector('.full-task')
let fullTitle = document.querySelector('.see-title')
let fullDesc = document.querySelector('.see-desc')
// let body = document.querySelector('body')


//open-close overlay
newTaskBtn.addEventListener('click', () =>{
  inputTaskEl.classList.toggle('active')
})

//cancel button
cancelBtn.addEventListener('click',() =>{
  inputTaskEl.classList.remove('active')
})


window.addEventListener('click', (e) =>{
  const overlay = inputTaskEl.contains(e.target)
  const btnOverlay = e.target.closest('button')

  if (!overlay && !btnOverlay){
    inputTaskEl.classList.remove('active')
  }
})

//Variables
let user = "Prayshe";
let toDoList = [];
let ids = 1;

userName.textContent += user;
const render = () => {
  tasksUl.innerHTML = "";

  toDoList.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id
    tasksUl.append(li);

    const divTask = document.createElement("div");
    li.append(divTask);
    divTask.setAttribute("class", "div-task");

    const divBtns = document.createElement("div");
    li.append(divBtns);
    divBtns.setAttribute("class", "div-btns");

    const taskSpan = document.createElement("span");
    divTask.append(taskSpan);
    taskSpan.setAttribute("class", "task");    
    
    const descSpan = document.createElement("span");
    divTask.append(descSpan);
    descSpan.setAttribute("class", "desc-span");

    const taskStatus = document.createElement("span");
    divTask.append(taskStatus);
    taskStatus.setAttribute("class", "task-status");

    taskSpan.innerText = task.task;
    descSpan.innerText = task.desc
    taskStatus.innerText = task.status;

    //Compelte button
    const doneTask = document.createElement("button");
    divBtns.append(doneTask);
    doneTask.setAttribute("class", "done-task");
    doneTask.innerText = " MARK AS DONE";
    doneTask.addEventListener("click", () => {
      taskStatus.innerHTML = statusChange(task.id);
    });

    //Delete button
    const deleteButton = document.createElement("button");
    divBtns.append(deleteButton);
    deleteButton.setAttribute("class", "delete-task");
    deleteButton.innerText = "DELETE";
    deleteButton.addEventListener("click", () => {
      removeTask(task.id);
    });
  });
};

tasksUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') return;

  const li = e.target.closest('li');
  if (!li) return;

  const id = Number(li.dataset.id);

  const task = toDoList.find(t => t.id === id);
  if (!task) return;

  const descSpan = li.querySelector('.desc-span');
  descSpan.classList.toggle('see-full');
});

window.addEventListener('click', (e) => {
  const isInsideOverlay = fullTask.contains(e.target);
  const isTaskClick = e.target.closest('li');

  if (!isInsideOverlay && !isTaskClick) {
    fullTask.classList.remove('active');
  }
});

//1. Function - add task
const addTask = () => {
  const text = labelInput.value.trim();
  const desc = inputDesc.value.trim()
  if (text !== "") {
    let task = {
      id: ids++,
      task: text,
      desc: desc,
      status: "incomplete",
    };

    toDoList.push(task);
  } 
  else if (text !== "" && desc ===""){
        let task = {
      id: ids++,
      task: text,
      status: "incomplete",
    };

    toDoList.push(task);
  }
  else {
    return;
  }
  render();
  inputTaskEl.classList.remove('active')
};

addTaskBtn.addEventListener("click", addTask);
labelInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addTask();
    console.log("key pressed");
  }
});

//2. Function - remove task
const removeTask = (id) => {
  toDoList = toDoList.filter((task) => task.id !== id);
  render();
};

//3. Function - change task status = completed
const statusChange = (id) => {
  toDoList = toDoList.map((element) => {
    if (element.id === id) {
      return { ...element, status: "completed" };
    } else {
      return element;
    }
  });
  render();
};
