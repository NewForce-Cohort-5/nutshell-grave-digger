import { saveMessage } from "./MessageProvider.js"
import { MessageList } from "./MessageList.js"

const contentTarget = document.querySelector("#chat-list")

// Handle browser-generated click event in component
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveMessage") {

        const newMessage = {
            messageText: document.querySelector("#message-text").value,
            dateOfMessage: document.querySelector("#date-text").value,// ugh
            userId: +sessionStorage.getItem("activeUser")
            // Key/value pairs here
        }
        console.log(newMessage)
        document.querySelector("#message-text").value = ""
        document.querySelector("#date-text").value = ""
        // Change API state and application state
        saveMessage(newMessage)
        .then(MessageList) // Refresh your list of notes once you've saved your new one
    }
})

//Put some input fields and prompts here
export const MessageForm = () => {
    return `
    <div class="col-sm-3 border border-dark m-3 list-group-item">
        <input class="form-control" type="textarea" id="message-text" placeholder="Message goes here">
        <input class="form-control" type="date" id="date-text">

        <button id="saveMessage">Save Message</button>
        </div>
    `
}

const eventHub = document.querySelector(".contentContainer")

