
let hour = 0;
let minute = 0;
let sec = 0;

let hrsDiv = document.getElementById("hrs")
let minDiv = document.getElementById("min")
let secDiv = document.getElementById("sec")

let is24 = true

setInterval(() => {
    sec++;
    if (sec == 60) {
        minute++;
        sec = 0
    }
    if (minute == 60) {
        hour++;
        minute = 0
    }
    if (is24) {
        if (hour == 24) {
            hour = 0;
        }
    } else {
        if (hour == 13) {
            hour = 0;
        }
    }

    render()
}, 1000)



function timesetter() {

    if (Number.parseInt(document.getElementById("hour").value) > ((is24) ? 23 : 12) || Number.parseInt(document.getElementById("minute").value) > 59 || Number.parseInt(document.getElementById("second").value) > 59) {
        let setter = document.getElementById("button");
        document.getElementById("audio").play();
        setter.style.backgroundColor = "#ff0000";
        setTimeout(() => {
            setter.style.backgroundColor = "#000000";
        }, 100)
        setTimeout(() => {
            setter.style.backgroundColor = "#ff0000";
        }, 200)
        setTimeout(() => {
            setter.style.backgroundColor = "#000000";
        }, 300)
        setTimeout(() => {
            setter.style.backgroundColor = "#ff0000";
        }, 400)
        setTimeout(() => {
            setter.style.backgroundColor = "#000000";
        }, 500)
        setTimeout(() => {
            setter.style.backgroundColor = "#ff0000";
        }, 600)
        setTimeout(() => {
            setter.style.backgroundColor = "#000000";
        }, 700)
        
        return;
    }
    hour = document.getElementById("hour").value || hour;
    minute = document.getElementById("minute").value || minute;
    sec = document.getElementById("second").value || sec;

    render()
    document.getElementById("hour").value = null;
    document.getElementById("minute").value = null;
    document.getElementById("second").value = null;
}

function resetTimer() {
    hour = 0;
    minute = 0;
    sec = 0
    render();
}



function render() {
    if (hour.toString().length == 1) {
        hour = `0${hour}`
    }
    if (minute.toString().length == 1) {
        minute = `0${minute}`
    }
    if (sec.toString().length == 1) {
        sec = `0${sec}`
    }
    hrsDiv.innerText = hour;
    minDiv.innerText = minute;
    secDiv.innerText = sec;
}