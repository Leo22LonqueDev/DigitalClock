const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval (function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let sc = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (mn < 10) mn = '0' + mn;
    if (sc < 10) sc = '0' + sc;

    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = sc;
})

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const hoje = setInterval(function dateToday() {
    let = today = new Date();
    let d = String(today.getDate()).padStart(2, '0')
    let m = String(today.getMonth() + 1).padStart(2, '0')
    let a = today.getFullYear()

    if (d < 10) hr = '0' + d;
    if (m < 10) mn = '0' + m;
    if (a < 10) sc = '0' + a;

    dia.textContent = d;
    mes.textContent = m;
    ano.textContent = a;

})