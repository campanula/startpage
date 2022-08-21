document.onreadystatechange = updateClock()

function updateClock() {
    const time = document.getElementById("time-text")
    const date = new Date();
    time.innerText = date.toLocaleTimeString([], { hour12: false })
}

setInterval(updateClock, 1000);