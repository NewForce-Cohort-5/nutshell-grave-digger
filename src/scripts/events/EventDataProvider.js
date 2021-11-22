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

//Delete Event
export const deleteEvent = eventId => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
    .then(getEvents)
}

//Edit Event
export const updateEvent = event => {
    return fetch(`http://localhost:8088/events/${event.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(getEvents)
}