// Adicionando texto ao balãozinho
let marcacaoEl = document.querySelectorAll('.marcacao')
let balaozinhoEl = document.querySelector('#balaozinho')

let conteudo = {
    titulo: ['', ''],
    contexto: ['', '']
}

for(let i = 0; i < marcacaoEl.length; ++i){
    conteudo.titulo[i] = marcacaoEl[i].dataset.titulo
    conteudo.contexto[i] = marcacaoEl[i].dataset.conteudo
}

// Adicionando movimento ao balãozinho
const seguirMouse = (e) => {
    balaozinhoEl.style.left = `${e.pageX + 13}px`
    balaozinhoEl.style.top = `${e.pageY + 13}px`
}

for(let i = 0; i < marcacaoEl.length; ++i) {
    marcacaoEl[i].addEventListener('mouseover', () => 
        balaozinhoEl.innerHTML = `<h2>${conteudo.titulo[i]}</h2> <p>${conteudo.contexto[i]}</p>`)

    marcacaoEl[i].addEventListener('mousemove', seguirMouse)

    marcacaoEl[i].addEventListener('mouseout', () => balaozinhoEl.innerHTML = '')
}

// Adicionando "alterar o tamanho da marcação"
let yInputEl = document.querySelector('#marcacao-y')
let xInputEl = document.querySelector('#marcacao-x')
let larguraInputEl = document.querySelector('#marcacao-largura')
let alturaInputEl = document.querySelector('#marcacao-altura')
let botaoResetarEl = document.querySelector('#resetar')

let marcacaoAtualEl = 0, valorAux = -1

const modificaValorInput = () => {
    if(valorAux == 0){
        xInputEl.value = yInputEl.value = 10
        larguraInputEl.value = alturaInputEl.value = 20
    }

    else if(valorAux == 1){
        xInputEl.value = larguraInputEl.value = alturaInputEl.value = 20
        yInputEl.value = 10
    }
} 

for(let i = 0; i < marcacaoEl.length; ++i){
    marcacaoEl[i].addEventListener('click', () => {
        valorAux = i
        
        marcacaoAtualEl = marcacaoEl[i]
        marcacaoAtualEl.classList.toggle('selecionada')

        modificaValorInput()
        
        for(let i = 0; i < marcacaoEl.length; ++i) 
            if(marcacaoEl[i] !== marcacaoAtualEl)
                marcacaoEl[i].classList.remove('selecionada')
    })
}

const modificaY = () => marcacaoAtualEl.style.top = `${yInputEl.value}px`
const modificaX = () => marcacaoAtualEl.style.left = `${xInputEl.value}px`
const modificaW = () => marcacaoAtualEl.style.width = `${larguraInputEl.value}px`
const modificaH = () => marcacaoAtualEl.style.height = `${alturaInputEl.value}px`

const reseta = () => {
    marcacaoAtualEl.style.top = `10px`
        
    switch(valorAux){
        case 0:        
            marcacaoAtualEl.style.left = `10px`
            marcacaoAtualEl.style.width = marcacaoAtualEl.style.height =`20px`
    
            yInputEl.value = xInputEl.value = 10
            larguraInputEl.value = alturaInputEl.value = 20
            break
        
        case 1:
            marcacaoAtualEl.style.left = `40px`
            marcacaoAtualEl.style.width = marcacaoAtualEl.style.height =`20px`
    
            yInputEl.value = xInputEl.value = 10
            larguraInputEl.value = alturaInputEl.value = 20
            break
    }
}

yInputEl.addEventListener('change', modificaY)
xInputEl.addEventListener('input', modificaX)
larguraInputEl.addEventListener('change', modificaW)
alturaInputEl.addEventListener('change', modificaH)
botaoResetarEl.addEventListener('click', reseta)

// Adicionando arquivos
let arquivoInputEl = document.querySelector('#arquivo')
let imagemPrincipalEl = document.querySelector('#imagem-principal')

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
const previewFile = () => {
    const file = document.querySelector("input[type=file]").files[0]
    const reader = new FileReader()
  
    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        imagemPrincipalEl.src = reader.result;
      },
      false,
    );
  
    if (file) {
      reader.readAsDataURL(file);
    }
}

arquivoInputEl.addEventListener('change', previewFile)