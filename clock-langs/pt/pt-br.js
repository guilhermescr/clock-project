// Variáveis Globais
var info = document.getElementById("info");
var corpo = document.getElementById("corpo");
var title = document.getElementById("title");
var modes = document.getElementById("modes");
var caption = document.getElementById("c-text");
var en = document.getElementById("en-link");
var ptbr = document.getElementById("ptbr-link");

// Dia e hora do seu dispositivo
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
            week.innerHTML = "Domingo,";
            break;
        case 1:
            week.innerHTML = "Segunda,";
            break;
        case 2:
            week.innerHTML = "Terça,";
            break;
        case 3:
            week.innerHTML = "Quarta,";
            break;
        case 4:
            week.innerHTML = "Quinta,";
            break;
        case 5:
            week.innerHTML = "Sexta,";
            break;
        case 6:
            week.innerHTML = "Sábado,";
            break;
        default:
            break;
    }
}

// Tempo atualiza automaticamente
window.setInterval(ticTac, 1000);

// Passar o mouse por cima do time ou link
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

// Ativar Modo Claro
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
    // Texto do Modo Selecionado
    caption.innerHTML = "Claro";
}

// Ativar Modo Escuro
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
    // Texto do Modo Selecionado
    caption.innerHTML = "Escuro [Padrão]"
}