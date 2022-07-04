"use strict"

let hours = 0;
let minutes = 0;
let seconds = 0;
let milleseconds = 0;
let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    pause();
    cron = setInterval(() => {timer(); }, 10);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milleseconds = 0;

    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
}

function timer(){
    if((milleseconds += 10) == 1000) {
        milleseconds = 0;
        seconds++;
    }
    if(seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if(minutes == 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById('hour').innerText = returnData(hours);
    document.getElementById('minute').innerText = returnData(minutes);
    document.getElementById('second').innerText = returnData(seconds);
    document.getElementById('millisecond').innerText = returnData(milleseconds);
}

function returnData(input){
    return input > 10 ? input : `0${input}`
}