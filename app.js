const uuid = require("uuid")
const todos = []


const addTODO = (todo)=>{
    todos.push({
        ...todo,
        dueDate:new Date(todo.dueDate),
        id:uuid.v4()
    })

}

addTODO({action:"Clean Car", dueDate:"11/30/2020"});
addTODO({action:"Eat Turkey", dueDate:"11/26/2020"});
console.log(todos)