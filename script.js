//Variables
let toDoList = []
let newToDoList = []
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
const task5 ={
    id : ids++,
    task : "reading",
    status : "incomplete"
}

//1. Function - add task
const addTask = (task) => toDoList.push(task)
addTask(task1)
addTask(task2)
addTask(task3)
addTask(task4)
addTask(task5)

//2. Function - remove task
const removeTask = (id) =>{
    toDoList = toDoList.filter(task => task.id !== id)
}

//3. Function - change task status = completed
const statusChange = (id) => completedTask = toDoList.map(element =>{
    if (element.id === id){
        return {...element, status: 'completed'}
    }
    else{
        return element
    }
})

removeTask(1)
statusChange(2)
console.log(toDoList)
console.log(completedTask)

