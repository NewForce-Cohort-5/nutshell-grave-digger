import { getMessage, useMessages } from "./MessageProvider.js"
import { Message } from "./MessageCard.js"
import {MessageForm} from "./MessageForm.js"
import { getUsers, useUsers } from "../auth/UserProvider.js" 

const contentTarget = document.querySelector(".print-list")

export const MessageList = () => {
  getMessage()
  .then(getUsers)
  .then(() => {

    let allTheMessages = useMessages();
    let allUsers = useUsers()
    let messageHTML = "";
    allTheMessages.forEach((singleMessage) => {
     const loginUserId = sessionStorage.getItem("activeUser")
      // let messageAuthor = allUsers.find( singleUser => singleUser.id === singleMessage.userId)
      let messageAuthor = allUsers.find( singleUser => singleUser.id === singleMessage.userId)

      messageHTML += Message(singleMessage, messageAuthor)
      
    })
   
    // allTheMessages.forEach((singleMessage) => {

    //     messageHTML += Message(singleMessage);
    // });

    contentTarget.innerHTML = `
    ${MessageForm()}
    <h2>Messages</h2>
    ${messageHTML}
    `

  });
};

