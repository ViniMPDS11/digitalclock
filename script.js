const agora = new Date();

let horas = agora.getHours();
let minutos = agora.getMinutes();
let segundos = agora.getSeconds();

function updateHours() {
    const agora = new Date();
    horas = agora.getHours();
    minutos = agora.getMinutes();
    segundos = agora.getSeconds();

    horas = String(horas).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');
}

const hours = document.querySelector('.hours')

updateHours()
hours.textContent = `${horas}:${minutos}:${segundos}`

setInterval(() => {
    updateHours()
    hours.textContent = `${horas}:${minutos}:${segundos}`
}, 1000);
