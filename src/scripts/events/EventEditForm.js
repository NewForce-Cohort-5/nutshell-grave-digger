import { useEvents, updateEvent, getEvents  } from "./EventDataProvider.js"
import { EventsList } from "./EventList.js";

const contentTarget = document.querySelector("#events-list")

export const EventEditForm = (eventId) => {
    const allevents = useEvents();
    const eventWeWantToEdit = allevents.find(singleEventListing => singleEventListing.id === eventId)

    contentTarget.innerHTML = `
        <div class="eventEditFormContainer">
        <h2>Edit Event</h2>
        <div class="eventEditForm">
            <input type="hidden" id="event-ID" value="${eventWeWantToEdit.id}"/>
            <input type="date" id="event-date" value="${eventWeWantToEdit.date}"/>
            <input type="text" value="${eventWeWantToEdit.name}" id="event-name"/>
            <button id="saveEventChanges-${eventId}" class="saveEventBtn">Save Changes</button>
            <button id="cancelEventChanges-${eventId}" class="cancelEventChangesBtn">Cancel</button>
        </div>
        </div>
    `
}

contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveEventChanges")){

        const editedEvent = {
            id: +document.querySelector("#event-ID").value,
            name: document.querySelector("#event-name").value,
            date: document.querySelector("#event-date").value,
        }
        updateevent(editedEvent)
        .then(EventsList)
    }
    else if(event.target.id.startsWith("cancelEventChanges")){
        console.log("changes cancelled")
        EventsList()
    }
})