import { getTasks, useTasks} from "./TaskProvider.js";
import { task } from "./TaskCard.js";
import { TaskForm } from "./TaskForm.js";

export const TaskList = () => {
    const contentTarget = document.querySelector("#Task-list")
    
    getTasks()
    .then(() => {
        
     let taskList = useTasks()
     let userTask = taskList.filter(singleEvent => {
            
            
        if(singleEvent.Completed === false) {
            return singleEvent
        }
    })

        contentTarget.innerHTML = `<h2 class="taskheading">My To Do List </h2>

        <button id= "NewTask">New Task</button>`
        contentTarget.innerHTML += userTask.map(singleTaskObject => {
            return task(singleTaskObject)
        }).join("")  
        
        
    
    })
    
    
    }

    document.querySelector("#container").addEventListener("click", (event) => {
        console.log(event.target.id)
        if(event.target.id === "NewTask"){            
            TaskForm()
        }
    })



    

    