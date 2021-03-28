var min = document.getElementById("confminutos").value
var seg = document.getElementById("confsegundos").value
var sino = new Audio()
sino.src = "recursos/sinoescolar"
var transicao = new Audio ()
transicao.src = "recursos/transicao.mp3"


var pausado = true

const timerContainer = document.querySelector('#timer')
const acionistaContainer = document.querySelector('#acionista')
const tituloContainer = document.querySelector('#titulo')
const spinnerContainer = document.querySelector('#loading')
const principalContainer = document.querySelector('#container')
const cabecarioContainer = document.querySelector('#cabecario')


const unidade = unit => (unit < 10) ? '0' + unit : unit

inserir (min, seg)

function abrirconf () {
    document.getElementById("janelaconf").style.display = "block"
}

function fecharconf () {
    document.getElementById("janelaconf").style.display = "none"
    document.body.style.background = "rgb(19, 18, 18)"
}

function configurar () {
    min = document.getElementById("confminutos").value
    seg = document.getElementById("confsegundos").value
    inserir (min, seg)
    fecharconf ()
}

function inserir (min, seg) {
    while (seg >= 60) {
        seg = seg - 60
        min++
    }
    timerContainer.textContent = unidade(min) + ":" + unidade(seg)
    tituloContainer.textContent = unidade(min) + ":" + unidade(seg)
}

function acionar () {
    if (pausado == true) {
        pausado = false
        contador ()
        acionistaContainer.textContent = "Parar"
        transicao.play()
    }else {pausado = true
        acionistaContainer.textContent = "Iniciar"}
}

function contador () {
    if (pausado == false) {
    if (min > 0 || seg > 0) {
        if (seg == 0) {
            seg = 59
            min--
        }else{seg--}
    }
    inserir (min, seg)
}

if (pausado == false && min <= 0 && seg <= 0) {
    terminarcontador()
} 

}

function terminarcontador () {
        sino.play()
        pausado = true
        min = 50
        inserir (min, seg)
        acionistaContainer.textContent = "Iniciar"
}

setTimeout ( () => {
    spinnerContainer.remove()
    principalContainer.style.display = 'flex'
    cabecarioContainer.style.display = 'flex'
    
}, 1000)

contador ()
setInterval (contador, 1000)
