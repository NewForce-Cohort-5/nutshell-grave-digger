import { EventsList } from "./EventList.js"
import { EventEditForm } from "./EventEditForm.js"
import { deleteEvent } from "./EventDataProvider.js"

export const Event = (event) => {
    return `
        <section id="eventId--${event.id}" class="eventList"> 
            <ul>
                <li>
                    <div class="eventListBlock">
                        <div class="eventListing">
                            <p class="eventNameHighlight"><strong>${event.name}</strong></p>
                            <p>${new Date(event.date).toLocaleDateString('en-US', {timeZone: 'UTC'})}</p>
                            <p><em>Location:&nbsp;</em> ${event.location}</p>
                        </div>
                        <div class="editDelBtns">
                            <button type="submit" id="editEvent--${event.id}" class="eventEditBtn">Edit</button>
                            <button type="submit" id="deleteEvent--${event.id}" class="eventDeleteBtn">Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    `
}

const eventHub = document.querySelector("body")

//Edit Event Listing
eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("editEvent")) {
        const eventId = +eventObject.target.id.split("--")[1]
        EventEditForm(eventId)
    }
})

//Delete Event Listing
eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteEvent")) {
        const idToDelete = eventObject.target.id.split("--")[1]
        deleteEvent(idToDelete)
        .then(EventsList)
    }
});

