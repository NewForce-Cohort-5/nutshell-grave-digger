import {useMessage} from "./MessageProvider.js"
import { updateMessage} from "./MessageProvider.js"
import { MessageList } from "./MessageList.js"

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector("#chat-list")

export const MessageEditForm = (messageId) => {
    // Give this component access to our application's notes state
    const allmessages = useMessage();

    // Find the note that we clicked on by its unique id
    const messageWeWantToEdit = allmessages.find(singleMessage=> singleMessage.id === messageId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Message</h2>
        <input type="date" id="message-date" value="${messageWeWantToEdit.dateOfMessage}" />
        <input type="text" value="${messageWeWantToEdit.messageText}" id="message-text" />
        <input type="text" value="${messageWeWantToEdit.chatUser}" id="message - chatUser" /> // this was "note-suspect"
        <button id="saveNoteChanges-${messageId}">Save Changes</button>
    `
}