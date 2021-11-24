// import { deleteMessage } from "./MessageProvider.js" no deleteMessage in Provider
import { MessageList } from "./MessageList.js"
import { MessageEditForm } from "./MessageEditForm.js"

export const messages = (messageObject) => {
    return `<section class = "messageCard">
    <div id="id">ID: </div> //this line would be for chat uses
    <div class="DateOfMessage"><a>Date: </a>${messageObject.DateOfMessage}</div>
    <div class="messageText">Message: ${messageObject.messageText}</div>
    <div class="chatUser>Chat User: ${messageObject.chatUser}</div>
    <button id="deleteMessage-- ${messageObject.id}">Delete</button>
    <button id="edit--${messageObject.id}">Edit</button>
    </section>`
}

const eventHub = document.querySelector("#chat-list")
eventHub.addEventListener("click", (eventObject) => {

    const noteId = +eventObject.target.id.split("--")[1]
    MessageEditForm(messageId);
})