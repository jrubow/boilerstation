import React from 'react'
import "./css/navbar.util.css"
import {useNavigate} from "react-router-dom"
import {BiHomeAlt2} from "react-icons/bi"
import {MdRestaurantMenu} from "react-icons/md"
import {BsCalendarEvent} from "react-icons/bs"
import {IoCreateOutline} from "react-icons/io5"
import {AiOutlineLink} from "react-icons/ai"


function Navigation() {
  const navigate = useNavigate()
  return (
    <div className="navbar">
        <BiHomeAlt2 style={{color:"white", fontSize:"30px",cursor:"pointer"}} onClick={() => navigate("/")}/>
        <MdRestaurantMenu style={{color:"white", fontSize:"30px",cursor:"pointer"}} onClick={() => navigate("/food")}/>
        <BsCalendarEvent style={{color:"white", fontSize:"27px",cursor:"pointer"}} onClick={() => navigate("/events")}/>
        <IoCreateOutline style={{color:"white", fontSize:"35px",cursor:"pointer"}} onClick={() => navigate("/postevent")}/>
        <AiOutlineLink style={{color:"white", fontSize:"35px",cursor:"pointer"}} onClick={() => navigate("/quicklinks")}/>
    </div>
  )
}

export default Navigation