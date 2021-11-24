import { saveTasks } from "./TaskProvider.js"
import { TaskList } from "./TaskList.js"



export const TaskForm =() => {
     
     document.querySelector("#task-form").innerHTML= `
        <section id="id">
        <input id="userId" type="text" placeholder="UserId">
       <input id="taskName" type="text" placeholder="taskName">
       <input class="form-control" type="date" id="dateToComplete">
           
       <label for="completeLabel">Completed:</label>
       <input id="completed" type="checkbox"><br>
        <button id="saveButton">Add Task</button>
   </section>
   `

   }

//    "id": 1, 
//     "userId": 1, 
//     "taskName": " mashpotatoes Dinner" ,
//     "dateToComplete": "11/18/21"

   document.querySelector("#container").addEventListener("click", (event) => {
    if(event.target.id === "saveButton"){
        // console.log("you clicked main")

        const newTask = {
            id: document.querySelector("#id").value,
            userId: document.querySelector("#userId").value,
            taskName: document.querySelector("#taskName").value,
            dateToComplete : document.querySelector("#dateToComplete").value,
            Completed: document.querySelector("#completed").checked
            
        }

        console.log(newTask)
        document.querySelector("#id").value = ""
        document.querySelector("#userId").value = ""
        document.querySelector("#taskName").value = ""
        document.querySelector("#dateToComplete").value = ""
        document.querySelector("#completed").checked = false
        


        saveTasks(newTask)
        .then(()=>{
            document.querySelector("#task-form").innerHTML= ""
            TaskList()
        })
        



    }
})
