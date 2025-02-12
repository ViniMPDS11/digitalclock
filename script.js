const hoursText = document.querySelector('.hoursText')
const dayText = document.querySelector('.dayText')
const mouthText = document.querySelector('.mouthText')
const yearText = document.querySelector('.yearText')
const secondsText = document.querySelector('.secondsText')

const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let day = now.getDate();
let mouth = now.getMonth() + 1;
let year = now.getFullYear();
let seconds = now.getSeconds();

function updateHours() {
    const now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    day = now.getDate();
    mouth = now.getMonth() + 1;
    year = now.getFullYear();
    seconds = now.getSeconds();


    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    day = String(day).padStart(2, '0');
    mouth = String(mouth).padStart(2, '0');
    year = String(year).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
}

updateHours()
hoursText.textContent = `${hours}:${minutes}`
dayText.textContent = `${day}`
mouthText.textContent = `${mouth}`
yearText.textContent = `${year}`
secondsText.textContent = `${seconds}`

setInterval(() => {
    updateHours()
    hoursText.textContent = `${hours}:${minutes}`
    dayText.textContent = `${day}`
    mouthText.textContent = `${mouth}`
    yearText.textContent = `${year}`
    secondsText.textContent = `${seconds}`
}, 1000);
