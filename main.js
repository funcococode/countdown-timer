const dayField = document.querySelector("#days")
const hourField = document.querySelector("#hours")
const minField = document.querySelector("#mins")
const secField = document.querySelector("#seconds")

let currentDate = moment()
let targetDate = moment("20210101T000000")
let days,hour,mins,seconds;


setInterval(()=>{
    days = currentDate.to(targetDate).match(/\d/g).join("")
    hour = 12 - moment().format("hh")
    mins = 60 - moment().format('mm')
    seconds = 60 - moment().format('ss')

    dayField.innerHTML = days
    hourField.innerHTML = hour
    minField.innerHTML = mins
    secField.innerHTML = seconds

},1000)