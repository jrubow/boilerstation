import React from 'react'
import "./css/quicklinks.pages.css"

function QuickLinks() {
  return (
    <div className="quicklinks">
        <h1>Quicklinks</h1>
        <div className="quickflex">
            <div className="quicklink" onClick={() => window.location.href = "https://purdue.brightspace.com"}>
                <p style={{fontSize:"25px",display:"flex",flexDirection:"col",alignItems:"center",justifyContent:"center"}}>BrightSpace</p>
            </div>
            <div className="quicklink" onClick={() => window.location.href = "https://openhotseat.org"}>
                <p style={{fontSize:"25px",display:"flex",flexDirection:"col",alignItems:"center",justifyContent:"center"}}>HotSeat</p>
            </div>
            <div className="quicklink" onClick={() => window.location.href = "https://outlook.live.com/"}>
                <p style={{fontSize:"25px",display:"flex",flexDirection:"col",alignItems:"center",justifyContent:"center"}}>Outlook</p>
            </div>
            <div className="quicklink" onClick={() => window.location.href = "https://www.purdue.edu/treasurer/finance/card/boilerexpess/?_ga=2.222095320.194055276.1692883746-34220681.1674177751"}>
                <p style={{fontSize:"25px",display:"flex",flexDirection:"col",alignItems:"center",justifyContent:"center"}}>BoilerExpress</p>
            </div>
            <div className="quicklink" onClick={() => window.location.href = "https://www.purdue.edu/push/"}>
                <p style={{fontSize:"25px",display:"flex",flexDirection:"col",alignItems:"center",justifyContent:"center"}}>PUSH</p>
            </div>
            <div className="quicklink" onClick={() => window.location.href = "https://www.purdue.edu/emergency/"}>
                <p style={{fontSize:"25px",display:"flex",flexDirection:"col",alignItems:"center",justifyContent:"center"}}>ALERT</p>
            </div>
            <div className="quicklink" onClick={() => window.location.href = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiXuLrp4bGBAxWiDEQIHXK6CKQQFnoECBcQAQ&url=https%3A%2F%2Fit.purdue.edu%2Fservices%2Fmypurdue.php&usg=AOvVaw1WD5qDGKEzLVFf8Evcvv0y&opi=89978449"}>
                <p style={{fontSize:"25px",display:"flex",flexDirection:"col",alignItems:"center",justifyContent:"center"}}>MyPurdue</p>
            </div>
        </div>
    </div>
  )
}

export default QuickLinks