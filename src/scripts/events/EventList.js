import { getEvents, useEvents } from "./EventDataProvider.js"
import { Event } from "./EventCard.js"
import { EventForm } from "./EventForm.js"

const htmlContentTarget = document.querySelector(".dashboard")

export const EventsList = () => {
    getEvents()
    .then(() => {
        let eventsArray = useEvents();
        let eventsHTML = "";

        eventsArray.sort((obj1, obj2) => {
            return new Date(obj1.date) - new Date(obj2.date)
        }).forEach((singleEventObj) => {
            eventsHTML += Event(singleEventObj)
        })

        htmlContentTarget.innerHTML  = `
            <div class="eventsContainer">
                <h2>Events</h2>    
                <div>
                    <div>
                        ${eventsHTML}
                    </div>
                </div>
                <div>
                    ${EventForm()}
                </div>
            </div>
        `
    })
}

// let sortByDate = events.sort((obj1, obj2) => {
//     return new Date(obj1.date) - new Date(obj2.date)
    
// })