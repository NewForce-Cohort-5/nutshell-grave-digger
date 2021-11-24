import {useMessages, updateMessage} from "./MessageProvider.js"
import { MessageList } from "./MessageList.js"
// import { updateMessage} from "./MessageProvider.js"

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.


export const MessageEditForm = (messageId) => {
    // Give this component access to our application's notes state
    const allmessages = useMessages();

    // Find the note that we clicked on by its unique id
    const messageWeWantToEdit = allmessages.find(singleMessage=> singleMessage.id === messageId)
    const contentTarget = document.querySelector(`#messageId--${messageId}`)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
    <section class="messageList-edit">
        <h2>Edit Message</h2>
        <input type="date" id="message-date-edit" value="${messageWeWantToEdit.dateOfMessage}"/>
        <input type="text" value="${messageWeWantToEdit.messageText}" id="message-text-edit"/>
        <button id="editMessage--${messageId}">Save Changes</button>
    </section>
    `
}

document.querySelector("#chat-list").addEventListener("click", (event) => {
    if(event.target.id.startsWith("editMessage")){
        const editedMessage = {
            id: +event.target.id.split("--")[1],
            messageText: document.querySelector("#message-text-edit").value,
            dateOfMessage: document.querySelector("#message-date-edit").value,
            userId: +sessionStorage.getItem("activeUser")
        }
        // console.log(editedMessage)
        updateMessage(editedMessage)
        .then(MessageList)
    }
})

