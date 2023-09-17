import React from 'react'
import {useNavigate} from "react-router-dom"
import "./css/postevent.pages.css"

function PostEventTwo() {
    const navigate = useNavigate()

  return (
    <div className="postEvent" style={{marginTop:"100px"}}>
        <p>Your event is now being processed. Thank you!</p>
        <div className="button" onClick={() => navigate("/")}>
            <p style={{color:"white"}}>Back to Home</p>
        </div>
    </div>
  )
}

export default PostEventTwo