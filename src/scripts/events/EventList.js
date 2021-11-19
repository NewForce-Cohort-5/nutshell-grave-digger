import { getEvents, useEvents } from "./EventDataProvider.js"
import { Event } from "./EventCard.js"
import { EventForm } from "./EventForm.js"

const htmlContentTarget = document.querySelector("#events-list")

//Add Event button triggers the Add Event Form
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "add-event") {
        let eventsFormHTML = "";
        eventsFormHTML += `${EventForm()}`
        // console.log("add event clicked")
        EventsList(eventsFormHTML)
    }
})

export const EventsList = (hiddenForm = "") => {
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
                <div class="eventsHdrBox">
                    <h2>Events</h2>
                    <button id="add-event">Add Event+</button>
                </div>    
                <div id="events-form">
                    <!-- Add Events Form shows up Here when Btn is clicked -->
                    ${hiddenForm}
                </div>
                <div>
                    ${eventsHTML}
                </div>
            </div>
        `
    })
}





////////Extra Code////////

// let sortByDate = events.sort((obj1, obj2) => {
//     return new Date(obj1.date) - new Date(obj2.date) 
// })


/////working through a solution to adding a highlight class to first event. This is mostly junk code!!

//needs to add the class .eventHighlight to next upcoming event in the div class .eventListBlock or does it target something else?
// document.querySelector("")

// for (let i = 0; i < 1; i++) {}

// let nextEvent = () => {
   
//     if(eventObject.date === somethingSomething) 
//     let highlight = document.getElementsByClassName("eventListBlock");
//     highlight.classList.add("eventHightlight");
// }

// let nextEvent = document.querySelector(".eventListBlock")
// nextEvent.classList.add(".eventHighlight")
// nextEvent()

///*****simpler solution was in css go add the pseudo-selector of :first-child to the class name so it would highlight the first block, since we already had the sort-by-date working.