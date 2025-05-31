let minimo = document.getElementById('min')
let maximo = document.getElementById('max')
let btn = document.getElementById('btn')
let ganador = document.getElementById('numero')
let principal = document.getElementById('principal')
let anuncio = document.getElementById('anuncio')
let cargando = document.getElementById('cargando')



function sorteo(){
    
    let min = parseInt(minimo.value);
    let max = parseInt(maximo.value);
    ganador.innerHTML = '.....'
    setTimeout(()=> {
        const randon = Math.floor(Math.random() * (max - min + 1)) + min;
        ganador.innerHTML = randon  
    }, 3000)
        
    principal.style.display = 'none'
    anuncio.style.display = 'flex'
}

// function abrirCargar(){
//     cargando.style.display = 'flex'
//     principal.style.display = 'none'
//     anuncio.style.display = 'none'
// }

// function cerrarCargar(){
//     setTimeout(abrirCargar(), 5000)
//     cargando.style.display = 'none'
//     principal.style.display = 'none'
//     anuncio.style.display = 'flex'
// }

// function cargar(){
//     setTimeout(abrirCargar(), 3000)
//     cerrarCargar()
// }

function volver(){
    minimo.value = ''
    maximo.value = ''
    principal.style.display = 'flex'
    anuncio.style.display = 'none'
}