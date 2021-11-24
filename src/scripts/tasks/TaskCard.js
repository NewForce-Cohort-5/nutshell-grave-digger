// "id": 1, 
//     "userId": 1, 
//     "taskName": "Dinner" ,
//     "dateToComplete": "11/18/21"

import { TaskList } from "./TaskList.js"
import {updateTask} from "./TaskProvider.js"




export const task = (singleTaskObject) => {
    return `<div class="task-card" id="card--${singleTaskObject.id}">
    
    
    <h4 class="taskName">${singleTaskObject.taskName}</h4>
    <p class="task">${singleTaskObject.dateToComplete}</p>   
    <input id="completed--${singleTaskObject.id}" type="checkbox"><br></br> 
   

    
</div>`
}

document.querySelector("#container").addEventListener("change", (event) => {
    console.log(event.target.id)
    if(event.target.id.startsWith("completed--")){
        const taskId = +event.target.id.split("--")[1]
        updateTask(taskId)
        .then(TaskList) 
        
        
    }
})


