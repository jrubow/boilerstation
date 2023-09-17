import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import "./css/departure.util.css"


function Departure({elements}) {
    const navigate = useNavigate()
    const [corecstatus, setOpen] = useState("");
    const [timeClose, setClose] = useState("");
    const [lineInfo, setLine] = useState("");

    function index() {
        var timestamp = new Date();
        var hr = timestamp.getHours();
        var min = timestamp.getMinutes();
        var idx = 0;
        if(((hr>=7 && hr<11) || (hr==11 && min<30)) || ((hr==11 && min>=40))) {
            idx = 1;
        }
        else if ((hr==11 && (min >=30 && min <40)) || (hr==13 && (min >=30 && min <40))) {
            idx = 2;
        }
        else if((hr==12 && ((min<25) || min>=40))) {
            idx = 2;
        }
        else if((hr==12 && ((min>=25) && min<40))) {
            idx = 3;
        }
        else if((hr==13 && ((min<30) && min>=40))) {
            idx = 1;
        }
        else if(hr > 13 && hr < 17) {
            idx = 1;
        }
        else if((hr>16 && hr<20) && ((min>=0 && min<5) || (min>=30 && min <35 ))) {
            idx = 2;
        }
        else if(hr == 20) {
            idx = 1;
        }
        else {
            idx=0;
        }
        if(hr >= 11 && hr < 14) {
            idx*=3;
        }
        else if(hr >= 17 && hr < 21) {
            idx*=2;
        }
        if(idx == 0) {
            setLine(" ");
        }
        if(idx < 4) {
            setLine("SHORT");
        }
        else if(idx < 7) {
            setLine("MEDIUM");
        }
        else {
            setLine("LONG");
        }
    }
    
    function openCorec() {
        var currentTime = new Date();
        var hour = currentTime.getHours();
        var mn = currentTime.getMinutes();
        var day = currentTime.getDay();
        var status = false;
        if(day > 0 && day < 5) {
            if((hour >= 5 && mn >= 30) && hour != 0) {
                 status = true;
                 setClose("till 12AM");
            }
        }
        else if((day == 5) && (hour >= 5 && mn >= 30) && hour < 22) {
                status = true;
                setClose("till 10PM");
            }
        else if ((day == 6) && (hour >= 8 && hour < 22)) {
            status = true;
            setClose("till 10PM");
        }
        else if((day == 0) && (hour > 10)) {
            status = true;
            setClose("till 12AM");
        }
        console.log("here")
        console.log(status);
        if(!status) {
            setOpen("CLOSED");
        } 
        else {
            setOpen("OPEN");
        }
    }

    useEffect(() => {
        openCorec()
        index()
    }, [])

    

    
  return (
    <div className="departureAbove">
    <div className="departureMain">
        {
            elements.map(item => {
                return (
                    item.location != undefined ? 
                            <div className="bucket">
                                <div className="mainHeader">
                                    <div className="header">
                                        <p>{ item.location === "Hillenbrand" ? "HILLY" : item.location.toUpperCase()}</p>
                                        {/* <p>/</p> */}
                                        <p className="lightMuka" style={{color:item.isOpen === "OPEN" ? "green" : "red"}}>{item.isOpen}</p>
                                    </div>
                                    <div className="smallInfo">
                                        <p style={{fontSize:"14px"}}>{item.time}</p>
                                        { item.isOpen !== "CLOSED" ? <div className="light" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}><p>Wait Time</p><p className="light">{lineInfo}</p></div> :""}
                                    </div>
                                </div>
                                
                                <div className="menu">
                                    <p onClick={() => navigate("/menu/" + item.location)}>Menu</p>
                                </div>
                            </div>
                    : "")
            }
            )
        }
        {
            (!window.location.href.includes("food")) ? 
                <div className="bucket">
                    <div className="mainHeader">
                        <div className="header">
                            <p>CoRec</p>
                            <p className="lightMuka" style={{color:corecstatus === "OPEN" ? "green" : "red"}}>{corecstatus}</p>
                        </div>
                        <div className="smallInfo">
                            <p>{timeClose}</p>
                        </div>
                    </div>
                    <div className="menu">
                        <p><p onClick={() => {window.location.href = "https://www.purdue.edu/recwell/index.php"}}>Info</p></p>
                    </div>
                </div>
            : ""
        }
    </div>
    </div>
    )
}

export default Departure