// Modificando o nome do avatar
let avatarNomeEl = document.querySelector('#avatar-nome')
let nomeInput = document.querySelector('#nome')

nomeInput.addEventListener('input', () => avatarNomeEl.innerHTML = nomeInput.value)

// Modificando a cor de pele do avatar
let corPeleInput = document.querySelector('#cor-pele')
let avatarCorpoEl = document.querySelector('#avatar-corpo')
let avatarCabecaEl = document.querySelector('#avatar-cabeca')

corPeleInput.addEventListener('change', () => {
    avatarCorpoEl.style.backgroundColor = corPeleInput.value
    avatarCabecaEl.style.backgroundColor = corPeleInput.value
})

// Modificando o cabelo
let cabeloInput = document.querySelector('#cabelos')
let cabeloEl = document.querySelector('#avatar-cabelo')

cabeloInput.addEventListener('change', () => cabeloEl.src = `imgs${cabeloInput.value}.png`)

// Adicionando e retirando acessórios
let lacinhoInput = document.querySelector('#lacinho')
let bandanaInput = document.querySelector('#bandana')
let oculosInput = document.querySelector('#oculos')

let lacinhoEl = document.querySelector('#avatar-lacinhos')
let bandanaEl = document.querySelector('#avatar-bandana')
let oculosEl = document.querySelector('#avatar-oculos')

lacinhoInput.addEventListener('change', () => lacinhoEl.classList.toggle('visivel'))
bandanaInput.addEventListener('change', () => bandanaEl.classList.toggle('visivel'))
oculosInput.addEventListener('change', () => oculosEl.classList.toggle('visivel'))

// Baixando o avatar
let botaoSalvarEl = document.querySelector('#salvar-imagem')
let avatarEl = document.querySelector('#avatar-preview')

botaoSalvarEl.addEventListener('click', () => {
    html2canvas(avatarEl, { useCORS: true }).then(function (canvas) {
        // a  foi gerada nesse objeto "canvas" e vamos pedir a ele
        // uma URL que a representa, codificada em uma String no modelo base64¹
        //
        // ¹base64: é uma forma de representar os pixels da imagem (ou qualquer
        // informação, na verdade) usando uma string com 64 tipos de caracteres
        // (todas as letras, maiúsculas e minúsculas, os algarismos de 0 a 9
        // e os símbolos '/' e '+'). Para mais informações, veja a página
        // da Wikipedia sobre base64 (https://pt.wikipedia.org/wiki/Base64)
        let imagemCodificadaEmURL = canvas.toDataURL()
    
        // cria um <a href="xxx" download="avatar.png"></a> dinamicamente
        // e o configura para que ele aponte (href) para uma URL que codifica
        // a imagem gerada pela biblioteca html2canvas
        let linkEl = document.createElement('a')
        linkEl.download = 'avatar.png'
        linkEl.href = imagemCodificadaEmURL
    
        // coloca esse link no body da página
        document.body.appendChild(linkEl)
    
        // simula um clique no link
        linkEl.click()
      })
})