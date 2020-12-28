const dayField = document.querySelector("#days")
const hourField = document.querySelector("#hours")
const minField = document.querySelector("#mins")
const secField = document.querySelector("#seconds")
const boxFill  = document.querySelector("#boxFill");
const msg = document.querySelector("#msg");



let currentDate = moment()
// let targetDate = moment("20210101T000000")
let targetDate = moment("20210101T000000")
let days,hour,mins,seconds;
let totalPercent

setInterval(()=>{
    days = currentDate.to(targetDate)
    console.log(days);
    if(days.indexOf("ago") != -1){
        msg.innerHTML = "Timer Ended, " + days
        days = 00;
        hour = 00;
        mins = 00;
        seconds = 00;
    }else{
        if(days.indexOf("minutes") != -1 || days.indexOf("a minute") != -1){
            days = 00;
            hour = 00;
        }else if(days.indexOf("a day") != -1){
            days = 01
        }else{
            days = currentDate.to(targetDate).match(/\d/g).join("")
        }
        hour = 24 - moment().format("HH")
        mins = 60 - moment().format('mm')
        seconds = 60 - moment().format('ss')
    }
    

    
    // totalPercent = ((days*24 + hour)*60 + mins)*60 + seconds
    // boxFill.style.top = Math.floor(totalPercent/innerHeight) + "px";
    // console.log(window.innerHeight);
    dayField.innerHTML = days
    hourField.innerHTML = hour
    minField.innerHTML = mins
    secField.innerHTML = seconds

},1000)