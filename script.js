//DOM
let addTaskBtn = document.querySelector(".add-task-btn");
let labelInput = document.querySelector("#label-input");
let taskText = document.querySelector(".task-text");
let tasksUl = document.querySelector(".tasks-ul");
let userName = document.querySelector('h1')

//Variables
let user = 'Prayshe'
let toDoList = [];
let ids = 1;

// //Task List
// const task1 ={
//     id : ids++,
//     task : "cleaning",
//     status : "incomplete"
// }
// const task2 ={
//     id : ids++,
//     task : "cooking",
//     status : "incomplete"
// }
// const task3 ={
//     id : ids++,
//     task : "coding",
//     status : "incomplete"
// }
// const task4 ={
//     id : ids++,
//     task : "testing",
//     status : "incomplete"
// }
// const task5 ={
//     id : ids++,
//     task : "reading",
//     status : "incomplete"
// }

userName.textContent += user
const render = () => {
  tasksUl.innerHTML = "";

  toDoList.forEach((task) => {
    const li = document.createElement("li");
    tasksUl.append(li);

    const divTask = document.createElement('div')
    li.append(divTask)
    divTask.setAttribute('class','div-task') 

    const divBtns = document.createElement('div')
    li.append(divBtns)
    divBtns.setAttribute('class','div-btns')

    const taskSpan = document.createElement("span");
    divTask.append(taskSpan);
    taskSpan.setAttribute("class", "task");

    const taskStatus = document.createElement("span");
    divTask.append(taskStatus);
    taskStatus.setAttribute("class", "task-status");

    taskSpan.innerText = task.task;
    taskStatus.innerText = task.status;

    //Compelte button
    const doneTask = document.createElement('button')
    divBtns.append(doneTask)
    doneTask.setAttribute('class','done-task')
    doneTask.innerText = " MARK AS DONE"
    doneTask.addEventListener('click', () =>{
      taskStatus.innerHTML = statusChange(task.id)
    })

    //Delete button
    const deleteButton = document.createElement('button')
    divBtns.append(deleteButton)
    deleteButton.setAttribute('class','delete-task')
    deleteButton.innerText = "DELETE"
    deleteButton.addEventListener('click', () =>{
      removeTask(task.id)
    }) 
  });
};

//1. Function - add task
const addTask = () => {
  const text = labelInput.value.trim();
  if (text !== "") {
    let task = {
      id: ids++,
      task: text,
      status: "incomplete",
    };

    toDoList.push(task);
  } else {
    return;
  }
  render();
};

addTaskBtn.addEventListener("click", addTask);

//2. Function - remove task
const removeTask = (id) => {
  toDoList = toDoList.filter((task) => task.id !== id);
  render()
};


//3. Function - change task status = completed
const statusChange = (id) =>{
  (toDoList = toDoList.map((element) => {
    if (element.id === id) {
      return { ...element, status: "completed" };
    } else {
      return element;
    }

  }));
  render()
}

// removeTask(1)
// statusChange(2)
// console.log(toDoList);
// console.log(completedTask);
