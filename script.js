let toDoList = []
let completedTask = []
let ids = 1

const addTask = (task) => toDoList.push(task)

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

addTask(task1)
addTask(task2)
addTask(task3)
addTask(task4)

const removeTask = (id) =>{
    toDoList.splice(toDoList.findIndex(element => element.id === id) , 1)
}

const statusChange = (id) =>{
    let index = toDoList.find((toDoList) => toDoList.id === id)
    index.status = 'completed'
    completedTask.push(index)

}

removeTask(1)
statusChange(2)
statusChange(3)
console.log(toDoList)
console.log(completedTask)

