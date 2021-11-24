

let tasks = []

export const useTasks = () => tasks.slice()

export const getTasks = () => {
    return fetch('http://localhost:8088/tasks')
        .then(response => response.json())
        .then(parsedtasks => {
            tasks = parsedtasks
        })

}

export const saveTasks = taskparm => {

    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskparm )
    })
    .then(getTasks) // After we add a note, get them all again so our new note appears in our collection
}

export const updateTask = (taskId) => {

return fetch(`http://localhost:8088/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
    Completed: true
}) 
  

}).then(getTasks)} 