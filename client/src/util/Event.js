import React from 'react'
import "./css/event.util.css"

function Event({name, admin, date, loc, desc}) {
  return (
    <div className="event">
        <div>
            <p class="n">{name}</p>
            <p class="d">{date.substring(0, 10) + " at "+ date.substring(11, 19)}</p>
        </div>
        <div>
            <p class="h">Hosted by {admin}</p>
            <p class="l">Location: {loc}</p>
        </div>
        <h3 class="a">{desc}</h3>
    </div>
  )
}

export default Event