import React from 'react'
import {useNavigate} from "react-router-dom"
import "./css/topbar.util.css"

function TopBar() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="top-bar">
          <h2 onClick={() => navigate("/")}style={{color:"white",fontSize:"35px",cursor:"pointer"}}>BOILER<span style={{color:"rgb(207,185,145)"}}>STATION</span></h2>
      </div>
    </div>
  )
}

export default TopBar