import React from 'react';
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
//import 'react-clock/dist/Clock.css';
import "./css/clock.util.css"


function Time() {
  const [value, setValue] = useState(new Date());
  const [month, setMonth] = useState(formatMonth((new Date).getMonth() + 1));
  const [day, setDay] = useState(formatDay((new Date).getDay()));
  const [date, setDate] = useState((new Date).getDate());
  const [cdown, setCountDown] = useState("");
  const [timer, setTimer] = useState("");
  
  

  function formatMonth(month) {
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return months[month];
  }
  function formatDay(day) {
    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    return days[day];
  }

// everything above is good

  function setup() { // DO NOT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var sectionList = [];
    for (var i = 1; i < 21; i++) {
        var time = new Date();
        time.setHours(7 + Math.floor(i / 2), (i % 2 === 1) ? 30 : 20, 0); // add +4 to account for GMT/UCT
        sectionList.push(time);
      }
    return sectionList;
  }

  function countdown(timestamp) {
      var lst = setup();
      var countTo = new Date();
      countTo.setHours(lst[timestamp].getHours());
      countTo.setMinutes(lst[timestamp].getMinutes());
      countTo.setSeconds(0);
      countTo.setMilliseconds(0);
      var myfunc = setInterval(function() {
          var now = new Date().getTime();
          var nowmin = new Date();
          //console.log(countTo);
          //console.log(now);
          var timeleft = countTo.getTime() - now + 1000;
          //console.log(timeleft);
          //var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

          //add hrs back later
          //var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          
          var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
          //if(hours = 0) {
            //hours = "";
          //}
          //else if(hours < 10) {
            //hours = "0" + hours;
          //}
          if((nowmin.getMinutes() >= 0 && nowmin.getMinutes() < 20) || (nowmin.getMinutes()>= 30 && nowmin.getMinutes() <=59)) { // FIX to make it right outside class hours!!
            setTimer("Period ends");
          }
          else {
            setTimer("Period starts");
          }
          if(minutes < 10) {
            minutes = "0" + minutes;
          }
          if(seconds < 10) {
            seconds = "0" + seconds;
          }
          //document.getElementById("hours").innerHTML = hours + ": ";
          //document.getElementById("mins").innerHTML = minutes + ": ";
          //document.getElementById("secs").innerHTML = seconds;

          //bring back first line
          //document.getElementById("countdown").innerHTML = hours + ":"+minutes+":"+seconds;
          setCountDown(minutes+":"+seconds)
      }, 1000);
  }

  function determinePeriod() {
      var datas = setup();
      var time = new Date();
      //time.setMonth(8);
      //time.setDate(15);
      //time.setHours(10);
      //time.setMinutes(31);
      //console.log(time);
      //var day = time.getDay();
      //var hrs = time.getHours();
      //var min = time.getMinutes();
      //var day = 1;
      //var hrs = 18;
      ///var min = 0;
      ///if(//day == 0 || day == 6 || (day == 5 && //
      //(hrs >= 17 && min >= 20)) {
        //  return 0;
      //}
      
      for (var i = datas.length-1; i >= 0; i--) {
          if(time > datas[datas.length-1]) {
              //for(var i = times.length-1; i >= 0; i--) {
                //if(day == 6) {
                  
                //}
                //else if(day == 5) {
                  //move to monday
                //}
                //else {
                  //day ++
                  
                //}
              return 0; // MOVE TO THE NEXT DAY!!

          }
          else if(time > datas[i]) {
              return i+1;
          }
  }

}

  useEffect(() => {
    
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [])

countdown(determinePeriod());

  
  return ( //needs a script for CoRec! with real time schedule, just like the classes!
    <div class="clockus">
      <div className="clocktime">
        <Clock value={value} size={120} minuteHandLength={85} minuteMarksWidth={2} hourMarksWidth={4} secondHandWidth={2} seconhourHandWidth={5} minuteHandWidth={4}/>
        <h6>{day+ " " + month + " " + date}</h6>
      </div>
      <div className="messages">
        <h2 id="class-msg">{timer}</h2>
        <h4 id="countdown">{cdown}</h4>
        <h3>Choo choo!</h3>
      </div>
    </div>
  );
}

export default Time