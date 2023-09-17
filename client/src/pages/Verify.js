import {useState} from 'react'
import axios from "axios"
import "./css/verify.pages.css"



function Verify() {
    const [style, setStyle] = useState("visible")
    function onChangeEventName (e) {
        axios.patch("http://localhost:5000/users/verify", {id:e.target.value})
        setStyle("hidden")
    }

  return (
    <div className="verify">
        <h1>Verify Event</h1>
        <p>Enter your verification key below:</p>
        <input type="text" onChange={onChangeEventName} id="eventname" placeholder="Verification Key" style={{visibility:style}}/>
    </div>
  )
}

export default Verify