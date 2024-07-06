const fcapa = document.querySelector(".fcapa");
const base = document.querySelector(".base");
const objeto = document.querySelector(".object");
const btnIniciar = document.querySelector(".iniciar");
const inputX = document.querySelector("#x");
const inputK = document.querySelector("#k");
const inputM = document.querySelector("#m");
const inputU = document.querySelector("#u");
const lblepe = document.querySelector(".lblepe");
const lblv0 = document.querySelector(".lblv0");
const lblwfr = document.querySelector(".lblwfr");
const lbla = document.querySelector(".lbla");
const lblv = document.querySelector(".lblv");
const lblec = document.querySelector(".lblec");

let x, k, m, u, epe, ec = 0, wfr = 0, v0, v = 0, a = 0, dmax, posx0 = 0;
const g = 9.81;

const calcularEpe = () => {
    epe = 0.5 * k * (x ** 2);
    lblepe.innerHTML = `${epe.toFixed(2)}`;
};

const calcularV0 = () => {
    v0 = Math.sqrt((2 * epe) / m);
    lblv0.innerHTML = `${v0.toFixed(2)}`;
};

const calcularA = () => {
    a = -u * g;
    lbla.innerHTML = `${a.toFixed(2)}`;
};

const calcularWfr = () => {
    wfr = u * m * g * (posx - posx0);
    lblwfr.innerHTML = `${wfr.toFixed(2)}`;
};

const calcularEc = () => {
    ec = epe - wfr;
    if (ec < 0) ec = 0;  // Asegúrate de que ec no sea negativo
    lblec.innerHTML = `${ec.toFixed(2)}`;
};

const calcularV = () => {
    v = Math.sqrt((2 * ec) / m);
    lblv.innerHTML = `${v.toFixed(2)}`;
};

const calcularDmax = () => {
    dmax = (v0 ** 2) / (2 * Math.abs(a));
    console.log(dmax);
};

let interval;
let posx = 0;

const moveRight = () => {
    calcularWfr();
    calcularEc();
    calcularV();

    console.log(`ec: ${ec}`);
    console.log(`wfr: ${wfr}`);

    if (ec <= 0 || posx >= dmax) {
        btnIniciar.disabled = false;
        clearInterval(interval);
        posx = 0;
        interval = null;
        wfr = epe; // Asegurar que wfr sea igual a epe al final
        lblwfr.innerHTML = `${wfr.toFixed(2)}`;
        return;  // Termina la función si la energía cinética es 0 o si se alcanza dmax
    }

    posx += v;
    objeto.style.marginLeft = `${posx}px`;
    console.log(posx);
    console.log(dmax);
    console.log(v0 - v)
};

btnIniciar.addEventListener("click", (e) => {
    e.preventDefault();
    x = parseFloat(inputX.value);
    k = parseFloat(inputK.value);
    m = parseFloat(inputM.value);
    u = parseFloat(inputU.value);
    if (x >= 0 && k >= 0 && m >= 0 && u >= 0) {
        // Resetear la posición inicial
        inputX.style.border = "0px";
        inputK.style.border = "0px";
        inputM.style.border = "0px";
        inputU.style.border = "0px";

        posx = 0;
        objeto.style.marginLeft = `0px`;

        calcularEpe();
        calcularV0();
        calcularA();
        calcularDmax();

        interval = setInterval(moveRight, 1000);
        btnIniciar.disabled = true;
    }
    if (x < 0 || isNaN(x)) {
        inputX.style.border = "2px solid red";
    }
    if (k < 0 || isNaN(k)) {
        inputK.style.border = "2px solid red";
    }
    if (m < 0 || isNaN(m)) {
        inputM.style.border = "2px solid red";
    }
    if (u < 0 || isNaN(u)) {
        inputU.style.border = "2px solid red";
    }


});
