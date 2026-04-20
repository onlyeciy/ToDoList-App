//DOM
let addTaskBtn = document.querySelector(".task__add-btn");
let labelInput = document.querySelector(".task__input--title");
let tasksUl = document.querySelector(".task__items");
let userName = document.querySelector(".app__title");
let newTaskBtn = document.querySelector('.task__new-btn');
let inputTaskEl = document.querySelector('.task__inputs');
let cancelBtn = document.querySelector('.task__cancel-btn');
let inputDesc = document.querySelector('.task__input--desc');


//input task overlay
newTaskBtn.addEventListener('click', () =>{
  inputTaskEl.classList.toggle('active')
})

window.addEventListener('click', (e) =>{
  const overlay = inputTaskEl.contains(e.target)
  const btnOverlay = e.target.closest('button')

  if (!overlay && !btnOverlay){
    inputTaskEl.classList.remove('active')
  }
})

//cancel button
cancelBtn.addEventListener('click',() =>{
  inputTaskEl.classList.remove('active')
})


//Variables
let user = "Prayshe";
let toDoList = [];
let ids = 1;

//user
userName.textContent += user;

//render
const render = () => {
  tasksUl.innerHTML = "";

  toDoList.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id
    tasksUl.append(li);

    const divTask = document.createElement("div");
    li.append(divTask);
    divTask.setAttribute("class", "task__content");

    const divBtns = document.createElement("div");
    li.append(divBtns);
    divBtns.setAttribute("class", "task__buttons");

    const taskSpan = document.createElement("span");
    divTask.append(taskSpan);
    taskSpan.setAttribute("class", "task__title");    
    
    const descSpan = document.createElement("span");
    divTask.append(descSpan);
    descSpan.setAttribute("class", "task__desc");

    const taskStatus = document.createElement("span");
    divTask.append(taskStatus);
    taskStatus.setAttribute("class", "task__status");

    taskSpan.innerText = task.task;
    descSpan.innerText = task.desc
    taskStatus.innerText = task.status;

    //Compelte button
    const doneTask = document.createElement("button");
    divBtns.append(doneTask);
    doneTask.setAttribute("class", "task__done-btn");
    doneTask.innerText = " MARK AS DONE";
    doneTask.addEventListener("click", () => {
      taskStatus.innerHTML = statusChange(task.id);
    });

    //Delete button
    const deleteButton = document.createElement("button");
    divBtns.append(deleteButton);
    deleteButton.setAttribute("class", "task__delete-btn");
    deleteButton.innerText = "DELETE";
    deleteButton.addEventListener("click", () => {
      removeTask(task.id);
    });
  });
};


//Desc Expanded
tasksUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') return;

  const li = e.target.closest('li');
  if (!li) return;

  const id = Number(li.dataset.id);

  const task = toDoList.find(t => t.id === id);
  if (!task) return;

  const descSpan = li.querySelector('.task__desc');
  descSpan.classList.toggle('expanded');
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
