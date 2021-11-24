import { saveEvent } from "./EventDataProvider.js"
import { EventsList } from "./EventList.js"

export const EventForm = () => {
    return `
        <section class="eventForm">
            <h3>Add New Event:</h3>
            <div class="eventFormInputs">
                <input type="text" id="event-name" class="eventNameForm" placeholder="Enter Event Name"><br />
                <input type="date" class="eventDateForm" id="event-date"><br />
                <input type="text" id="event-location" class="eventLocationForm" placeholder="Enter Event Location"><br />
                <button id="save-event" class="eventSaveBtn">Save</button>
                <button id="cancel-changes" class="cancelEventChangesBtn">Cancel</button>
            </div>
        </section>
    `
}

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save-event") {

        const newEvent = {
            userId: +sessionStorage.getItem("activeUser"),
            date: document.querySelector("#event-date").value,
            name: document.querySelector("#event-name").value,
            location: document.querySelector("#event-location").value
        }
        // console.log(newEvent)

        document.querySelector("#event-date").value = ""
        document.querySelector("#event-name").value = ""
        document.querySelector("#event-location").value = ""

        saveEvent(newEvent)
        .then(EventsList)
    }
    
    else if(clickEvent.target.id.startsWith("cancel-changes")){
        // console.log("changes cancelled")
        EventsList()
    }
})