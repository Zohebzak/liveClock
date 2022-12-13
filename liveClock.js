function timeFunction() {
    let time = new Date

    let hrs = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let session = document.getElementById("session")

    if (hrs > 12) {
        session.innerHTML = "PM"
    } else {
        session.innerHTML = "AM"
    }
    if (hrs > 12) {
        hrs = hrs - 12
    }
    document.getElementById("hours").innerHTML = hrs
    document.getElementById("minuts").innerHTML = min
    document.getElementById("seconds").innerHTML = sec




}
setInterval(timeFunction, 10)