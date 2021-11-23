import { useEvents, updateEvent, getEvents  } from "./EventDataProvider.js"
import { EventsList } from "./EventList.js";


export const EventEditForm = (eventId) => {
    const allevents = useEvents();
    const eventWeWantToEdit = allevents.find(singleEventListing => singleEventListing.id === eventId)
    const contentTarget = document.querySelector(`#eventId--${eventId}`)

    contentTarget.innerHTML = `
        <section class="eventList-edit">
            <ul>
                <li>
                    <div class="eventListBlock">
                        <div class="eventListing">
                            <input type="hidden" id="event-ID" value="${eventWeWantToEdit.id}"/>
                            <input type="text" id="event-name" class="eventNameForm-edit" value="${eventWeWantToEdit.name}">
                            <br>
                            <input type="date" class="eventDateForm-edit" id="event-date" value="${eventWeWantToEdit.date}">
                            <br>
                            <input type="text" id="event-location" class="eventLocationForm-edit" value="${eventWeWantToEdit.location}">
                        </div>
                        <div class="editDelBtns-editForm">
                            <button id="saveEventChanges-${eventId}" class="saveEventBtn">Save</button>
                            <button id="cancelEventChanges-${eventId}" class="cancelEventChangesBtn">Cancel</button>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    `
}

document.querySelector("#events-list").addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveEventChanges")){

        const editedEvent = {
            id: +document.querySelector("#event-ID").value,
            name: document.querySelector("#event-name").value,
            date: document.querySelector("#event-date").value,
            location: document.querySelector("#event-location").value
        }
        updateEvent(editedEvent)
        .then(EventsList)
    }
    else if(event.target.id.startsWith("cancelEventChanges")){
        // console.log("changes cancelled")
        EventsList()
    }
})