import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./css/postevent.pages.css"
import axios from "axios"

function PostEvent() {
    const navigate = useNavigate()
    const [eventname, setEventName] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [admin, setAdmin] = useState("")

    function onChangeEventName (e) {
        setEventName(e.target.value)
    }   

    function onChangeAdmin (e) {
        setAdmin(e.target.value)
    }

    function onChangeTime (e) {
        setTime(e.target.value)
    }

    function onChangeLocation (e) {
        setLocation(e.target.value)
    }

    function onChangeDescription (e) {
        setDescription(e.target.value)
    }

    function onSubmit() {
        if (location !== "" && admin !== "" && description !== "" && time !== "" && eventname !== "") {
            const event = {
                location:location,
                admin:admin,
                description:description,
                date:time,
                eventname:eventname
            }
            axios.post("http://localhost:5000/users/postevent", event).then(res => console.log(res)).catch(err => console.log(err))
        } else {
            alert("Not all fields are completed!")
        }
        navigate("/postevent/notification")
    }

  return (
    <div className="postEvent">
        <h1>Post Event</h1>
        <input type="text" onChange={onChangeEventName} id="eventname" placeholder="Event Name"/>
        <input type="text" onChange={onChangeAdmin} id="administrator" placeholder="Administrator"/>
        <div style={{width:"100%",display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center"}}> <h6 style={{marginRight:"10px",display:"flex",alignItems:"center", justifyContent:"center"}}>Date: </h6><input type="date" onChange={onChangeTime} id="time"/></div>
        <input type="text" onChange={onChangeLocation} id="location" placeholder="Location"/>
        <input type="text" onChange={onChangeDescription} id="description" placeholder="Description"/>
        <div onClick={onSubmit} className="button"><p style={{color:"white"}}>Submit</p></div>
    </div>
  )
}

export default PostEvent