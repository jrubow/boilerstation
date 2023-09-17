import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"
import "./css/menu.pages.css"
import Navigation from "../util/Navigation";

function Menu() {
    const { id } = useParams();
    const [meals, setMeals] = useState([])
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`

    useEffect(() => {
        async function fetchData () {
        console.log("fetching data")
            await axios.get("https://api.hfs.purdue.edu/menus/v2/locations/" + id + "/" + formattedDate).then(res => {console.log(res.data.Meals); return setMeals(res.data.Meals)}).catch(err => {console.log(err)})
        }

        fetchData()
    }, []) 

  return (
    <div className="menuMain">
        
        {
          
            meals.map(meal => {
              return (
                meal.Hours != null ? 
                  // currentDate.getHours() >= parseInt(meal.Hours.StartTime.split(":")[0]) && currentDate.getHours() <= parseInt(meal.Hours.EndTime.split(":")[0]) && currentDate.getMinutes() >= parseInt(meal.Hours.StartTime.split(":")[1]) && currentDate.getMinutes() <= parseInt(meal.Hours.EndTime.split(":")[1])?  
                    <div className="meal">
                      <h1>{meal.Name}</h1>
                      { meal.Stations.map(station => {
                        return (
                        <div className="station">
                          <p>{station.Name}</p>
                          {station.Items.map(item => {
                            return (
                              <div className="item">
                                <h2>{item.Name}</h2>
                              </div>
                            )
                          })}
                        </div>)
                      })}
                    </div>
                  // : <h2>{meal.Name + " is closed! \n"}</h2>
                : <h2>{"Not Serving " + meal.Name}</h2>
            )})
          
        }
    </div>
  )
}

export default Menu