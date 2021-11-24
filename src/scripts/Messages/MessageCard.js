import { MessageEditForm } from "./MessageEditForm.js"

export const Message = (messageObject, userObject) => {
    return `
    <div class="col-sm-3 border border-dark m-3 list-group-item">
    <h4> ${userObject.email}: ${messageObject.messageText}</h4>
    <button id="edit--${messageObject.id}">Edit</button>
    </div>

    `
}

const eventhub = document.querySelector(".container")
eventhub.addEventListener("click", (eventObject) => {

   const noteId = +eventObject.target.id.split("--")[1]
   MessageEditForm(noteId);
})


/* <h4> Chat User: ${Object.suspect}</h4>
<p>New Message: ${Object.messageText}</h3> */