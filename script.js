//Variables
let toDoList = []
let completedTask = []
let ids = 1

//Task List
const task1 ={
    id : ids++,
    task : "cleaning",
    status : "incomplete"
}
const task2 ={
    id : ids++,
    task : "cooking",
    status : "incomplete"
}
const task3 ={
    id : ids++,
    task : "coding",
    status : "incomplete"
}
const task4 ={
    id : ids++,
    task : "testing",
    status : "incomplete"
}

//1. Function - add task
const addTask = (task) => toDoList.push(task)
addTask(task1)
addTask(task2)
addTask(task3)
addTask(task4)

//2. Function - remove task
const removeTask = (id) =>{
    toDoList.splice(toDoList.findIndex(element => element.id === id) , 1)
}

//3. Function - change task status = completed
const statusChange = (id) =>{
    let task = toDoList.find((toDoList) => toDoList.id === id)
    task.status = 'completed'
    completedTask.push(task)

}

removeTask(1)
statusChange(2)
statusChange(3)
console.log(toDoList)
console.log(completedTask)

