let eventsArray = []

export const useEvents = () => {
    return eventsArray.slice()
}

export const getEvents = () => {
    return fetch ('http://localhost:8088/events')
    .then (unsortedEventsList => unsortedEventsList.json())
    .then (sortedEventsList => { eventsArray = sortedEventsList })
}

export const saveEvent = (event) => {
     return fetch ('http://localhost:8088/events', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event)
    })
    .then(getEvents)
}