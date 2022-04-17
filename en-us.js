// Global Variables
var info = document.getElementById("info");
var corpo = document.getElementById("corpo");
var title = document.getElementById("title");
var modes = document.getElementById("modes");
var caption = document.getElementById("c-text");
var en = document.getElementById("en-link");
var ptbr = document.getElementById("ptbr-link");

// Date n Time from your device
function ticTac() {
    var time = document.getElementById("time");
    var week = document.getElementById("week");
    var date = new Date();
    var weekDay = date.getDay();
    var hours = String(date.getHours()).padStart(2, "0");
    var minutes = String(date.getMinutes()).padStart(2, "0");
    var seconds = String(date.getSeconds()).padStart(2, "0");
    time.innerHTML = `${hours}:${minutes}:${seconds}`;

    switch(weekDay) {
        case 0:
            week.innerHTML = "Sunday,";
            break;
        case 1:
            week.innerHTML = "Monday,";
            break;
        case 2:
            week.innerHTML = "Tuesday,";
            break;
        case 3:
            week.innerHTML = "Wednesday,";
            break;
        case 4:
            week.innerHTML = "Thursday,";
            break;
        case 5:
            week.innerHTML = "Friday,";
            break;
        case 6:
            week.innerHTML = "Saturday,";
            break;
        default:
            break;
    }
}

// Time updates automatically
window.setInterval(ticTac, 1000);

// Hover over the time or link
if (title.style.color = "white") {
    info.addEventListener("mouseover", infoHover);
    function infoHover() {
        info.style.background = "white";
        info.style.color = "black";
    }

    info.addEventListener("mouseleave", infoTOff);
    function infoTOff() {
        info.style.backgroundColor = "black";
        info.style.color = "white";
    }

    en.addEventListener("mouseover", enHover);
    function enHover() {
        en.style.color = "#a1111f";
    }
    en.addEventListener("mouseleave", enUnHover);
    function enUnHover() {
        en.style.color = "black";
    }

    ptbr.addEventListener("mouseover", ptbrHover);
    function ptbrHover() {
        ptbr.style.color = "#a1111f";
    }
    ptbr.addEventListener("mouseleave", ptbrUnHover);
    function ptbrUnHover() {
        ptbr.style.color = "black";
    }
}

// Turn On Light-Mode
var light = document.getElementById("light-act");
light.addEventListener("click", lightOn);

function lightOn() {
    corpo.style.background = "#f1f1f1";
    title.style.color = "black";
    modes.style.background = "#faa2b3";
    modes.style.color = "black";
    modes.style.borderColor = "black";
    en.style.color = "black";
    ptbr.style.color = "black";
    info.style.background = "black"
    info.style.color = "white";
    info.style.borderColor = "black";
    // Selected Mode Text
    caption.innerHTML = "Light";
}

// Turn On Dark-Mode
var dark = document.getElementById("dark-act");
dark.addEventListener("click", darkOn);

function darkOn() {
    corpo.style.background = "black";
    title.style.color = "white";
    modes.style.borderColor = "white";
    modes.style.background = "#f1f1f1";
    modes.style.color = "black";
    en.style.color = "black";
    ptbr.style.color = "black";
    info.style.borderColor = "#bbb";
    // Selected Mode Text
    caption.innerHTML = "Dark [Default]"
}