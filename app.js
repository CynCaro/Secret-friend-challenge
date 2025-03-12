let numeroSecreto = 0;
let intentos = 0;
let listaNumerossorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usurio no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerossorteados);
    // Si ya sorteamos todos los números
    if (listaNumerossorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerossorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerossorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Selecciona un número entre 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el núemro de intentos
    condicionesIniciales();
    //Deshabilitar el botón de "Nuevo juego" en el 2do intento
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
