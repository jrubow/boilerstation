import {useEffect, useState} from 'react'
import "./css/events.pages.css"
import axios from "axios"
import Event from "../util/Event"

function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/users/events").then(res => setEvents(res.data)).catch(err => console.log(err))
  }, [])

  return (
    <div>
        <div className="eventsMain">
            <h1>Events</h1>
            {
              events.map(event => {
                return <Event name={event.eventname} admin={event.admin} date={event.date} lo={event.location} desc={event.description}/>
              })
            }
        </div>
    </div>
  )
}

export default Events