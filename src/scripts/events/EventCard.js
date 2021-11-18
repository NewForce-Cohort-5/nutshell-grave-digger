export const Event = (event) => {
    return `
        <section id="eventId--${event.id}" class="eventList"> 
            <ul>
                <li>
                    <div class="eventListBlock">
                        <p><em>Event:</em> ${event.name}</p>
                        <p><em>Date:</em> ${new Date(event.date).toLocaleDateString('en-US')}</p>
                        <p><em>Location:</em> ${event.location}</p>
                    </div>
                </li>
            </ul>
        </section>
    `
}