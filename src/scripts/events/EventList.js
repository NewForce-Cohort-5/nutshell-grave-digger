import { getEvents, useEvents } from "./EventDataProvider.js"
import { Event } from "./EventCard.js"
import { EventForm } from "./EventForm.js"

const htmlContentTarget = document.querySelector(".dashboard")

export const EventsList = () => {
    getEvents()
    .then(() => {
        let eventsArray = useEvents();
        let eventsHTML = "";
        //.sort will sort the list according to date before doing the .forEach method that loops through the array.
        eventsArray.sort((eventObj1, eventObj2) => {
            return new Date(eventObj1.date) - new Date(eventObj2.date)
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


 //needs to add the class .eventHighlight to next upcoming event in the div class .eventListBlock
document.querySelector("")
let nextEvent = () => {
   
    if()
    let highlight = document.getElementsByClassName("eventListBlock");
    highlight.classList.add("eventHightlight");
}

let nextEvent = document.querySelector(".eventListBlock")
nextEvent.classList.add(".eventHighlight")
nextEvent()