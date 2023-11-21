let botaoResolverEl = document.querySelector ("#resolver")

let coeficienteAEl = document.querySelector ("#coeficiente-a")
let coeficienteBEl = document.querySelector ("#coeficiente-b")
let coeficienteCEl = document.querySelector ("#coeficiente-c")

let deltaEl = document.querySelector ("#resultado-delta")

let resultadoX1El = document.querySelector("#resultado-x1")
let resultadoX2El = document.querySelector("#resultado-x2")

let resultadoRaizesEl = document.querySelector("#resultado-raiz")
let verticeEl = document.querySelector("#vertice")
let concavidadeEl = document.querySelector("#concavidade")

function resolverDelta () {
    if (coeficienteAEl.value != 0)
        return coeficienteBEl.value ** 2 - 4 * coeficienteAEl.value * coeficienteCEl.value

    return "Erro! (a = 0)"
}

function resolverX1 () {
    if(deltaEl.value > 0)
        return -coeficienteBEl.value + Math.sqrt(deltaEl.value) / 2 * coeficienteAEl.value

    return "Erro! (Δ < 0)"
}

function resolverX2 () {
    if(deltaEl.value > 0)
        return -coeficienteBEl.value - Math.sqrt(deltaEl.value) / 2 * coeficienteAEl.value

    return "Erro! (Δ < 0)"
}

function calcularRaizes () {
    if(coeficienteAEl.value == 0)
        return "Erro! (a = 0)"

    if (deltaEl.value < 0)
        return 0

    else if (deltaEl.value == 0)
        return 1
    
    return 2
}

function calculaVerticeX () {
    if(coeficienteAEl.value === 0)
        return "Erro! (a = 0)"

    return -coeficienteBEl.value / 2 * coeficienteAEl.value
}

function calculaVerticeY () {
    if(coeficienteAEl.value === 0)
        return ''
    return -deltaEl.value / 4 * coeficienteAEl.value
}

function concavidade () {
    if(coeficienteAEl.value > 0)
        return "Para cima"
    
    else if(coeficienteAEl.value < 0)
        return "Para baixo"

    return "Erro! (a = 0)"
}

botaoResolverEl.addEventListener('click', function(){
    deltaEl.value = resolverDelta ()
    resultadoX1El.value = resolverX1 ()
    resultadoX2El.value = resolverX2 ()
    resultadoRaizesEl.value = calcularRaizes ()
    verticeEl.value = '(' + calculaVerticeX () + ', ' + calculaVerticeY () + ')'
    concavidadeEl.value = concavidade () })