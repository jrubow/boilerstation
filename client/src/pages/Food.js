import {useState, useEffect} from 'react'
import Departure from "../util/Departure"
import axios from "axios"

function formatTime(hours, minutes) {
    console.log(minutes < 10)
    if (minutes < 10) {
      minutes = "0" + minutes
    }
  
    if(hours > 12) {
      return (hours - 12) + ":" + minutes //+ "pm"
    } else if (hours === 12) {
      return (hours) + ":" + minutes //+ "pm"
    } else if (hours === 0) {
      return "12:" + minutes //+ "am"
    } else {
      return hours + ":" + minutes //+ "am"
    }
  } 
  
  function diningInfo(res) {
    let arr = {
      location:res.data.Location,
      isOpen:"CLOSED",
      distance:"300ft",
      time:"Not Serving"
    }
  
    res.data.Meals.forEach(meal => {
      if (meal.Hours != null) {
        // Get the current time
        const currentTime = new Date();
        const currentHours = currentTime.getHours();
        const startParts = meal.Hours.StartTime.split(":");
        const endParts = meal.Hours.EndTime.split(":");
        const startDateTime = new Date(0, 0, 0, parseInt(startParts[0]), parseInt(startParts[1]), parseInt(startParts[2]));
        const endDateTime = new Date(0, 0, 0, parseInt(endParts[0]), parseInt(endParts[1]), parseInt(endParts[2]));
        // Check if the current time is between start time and end time
        if (currentHours >= startDateTime.getHours() && currentHours <= endDateTime.getHours()) {
            arr.isOpen = "OPEN"
            arr.time = formatTime(startDateTime.getHours(), startDateTime.getMinutes()) + "-" + formatTime(endDateTime.getHours(), endDateTime.getMinutes())
        } 
      }
    })
    console.log(arr)
    return arr
  }
  
  function Food() {
    const [dining, setDining] = useState([])
  
    useEffect(() => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0')
      const day = String(currentDate.getDate()).padStart(2, '0')
      const formattedDate = `${year}-${month}-${day}`
      
      async function fetchData () {
        console.log("fetching data")
        if (dining.length == 0) {
          let arr = []
          await axios.get("https://api.hfs.purdue.edu/menus/v2/locations/Windsor/" + formattedDate).then(res => arr.push(diningInfo(res))).catch(err => {console.log(err)})
          await axios.get("https://api.hfs.purdue.edu/menus/v2/locations/Ford/" + formattedDate).then(res => arr.push(diningInfo(res))).catch(err => {console.log(err)})
          await axios.get("https://api.hfs.purdue.edu/menus/v2/locations/Wiley/" + formattedDate).then(res => arr.push(diningInfo(res))).catch(err => {console.log(err)})
          await axios.get("https://api.hfs.purdue.edu/menus/v2/locations/Earhart/" + formattedDate).then(res => arr.push(diningInfo(res))).catch(err => {console.log(err)})
          await axios.get("https://api.hfs.purdue.edu/menus/v2/locations/Hillenbrand/" + formattedDate).then(res => arr.push(diningInfo(res))).catch(err => {console.log(err)})
  
          setDining(arr)
        }
      }
  
      fetchData()
    }, []) 
  return (
    <div style={{marginTop:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
        <h1>Menus</h1>
        <Departure elements={dining}/>
    </div>
  )
}

export default Food