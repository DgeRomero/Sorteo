let minimo = document.getElementById('min')
let maximo = document.getElementById('max')
let btn = document.getElementById('btnVolver')
let ganador = document.getElementById('numero')
let principal = document.getElementById('principal')
let anuncio = document.getElementById('anuncio')
let sorteando = document.getElementById('sorteando')
let felicitaciones = document.getElementById('felicitaciones')



function sorteo(){
    
    let min = parseInt(minimo.value);
    let max = parseInt(maximo.value);

    sorteando.innerHTML = 'SORTEANDO.....'
    ganador.innerHTML = '.....'
    
    setTimeout(()=> {
        const randon = Math.floor(Math.random() * (max - min + 1)) + min;
        sorteando.innerHTML = 'NÚMERO GANADOR'
        ganador.innerHTML = randon
        felicitaciones.innerHTML = '¡FELICITACIONES!'
        btn.style.display = 'inline'
    }, 3000)
        
    principal.style.display = 'none'
    anuncio.style.display = 'flex'
}

function volver(){
    minimo.value = ''
    maximo.value = ''
    principal.style.display = 'flex'
    anuncio.style.display = 'none'
}