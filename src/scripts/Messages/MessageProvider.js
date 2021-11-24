let messagesArray = []

export const useMessages = () => {
    return messagesArray.slice()
}

export const getMessage = () => {
    return fetch('http://localhost:8088/messages')
        .then(dirtyMessages => dirtyMessages.json())
        .then(cleanMessages => {
            messagesArray = cleanMessages
        })

}

export const saveMessage = (message) => {
    return fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(getMessage)
}

export const updateMessage = message => {

    return fetch(`http://localhost:8088/messages/${message.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })

}