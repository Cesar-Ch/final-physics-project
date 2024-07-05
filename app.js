const fcapa = document.querySelector(".fcapa");
const base = document.querySelector(".base");
const objeto = document.querySelector(".object");
const btnIniciar = document.querySelector(".iniciar");
const inputX = document.querySelector("#x");
const inputK = document.querySelector("#k");
const inputM = document.querySelector("#m");
const inputU = document.querySelector("#u");


let x, k, m, u




console.log(window.clientWidth);
console.log(fcapa.clientWidth);
let interval
let distancia = 25
let moveRight = () => {
    objeto.setAttribute("style", `margin-left: ${distancia}px;`)
    distancia += 10
    if (distancia >= fcapa.clientWidth - 150) {
        btnIniciar.disabled = false
        clearInterval(interval)
        distancia = 0
        interval = null
    }
    console.log(x)
    console.log(k)
}


btnIniciar.addEventListener("click", (e) => {
    e.preventDefault()
    x = parseFloat(inputX.value)
    k = parseFloat(inputK.value)
    m = parseFloat(inputM.value)
    u = parseFloat(inputU.value)
    interval = setInterval(moveRight, 100)
    btnIniciar.disabled = true
})


// mover objeto hacia la izquierda