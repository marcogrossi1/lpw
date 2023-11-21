// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-front-end/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    '01-philae-parts.jpg',
    '02-philae-rosetta.jpg',
    '03-philae-separation.jpg',
    '04-philae-67-picture.jpg',
    '05-philae-collecting.jpg'
  ];

let indiceDaFotoAtual = 0;
let imagemEl = document.querySelector('#slide')

const navegacao = (botaoClicado) => {
  if (botaoClicado === 1){
    if(indiceDaFotoAtual < nomesDasImagens.length - 1) 
      indiceDaFotoAtual++

    else indiceDaFotoAtual = 0
  }

  else if (botaoClicado === -1){
    if(indiceDaFotoAtual > 0) 
      indiceDaFotoAtual--
    
    else indiceDaFotoAtual = nomesDasImagens.length - 1
  }

  let novaImagem = servidorDasImagens + nomesDasImagens[indiceDaFotoAtual]
  imagemEl.src = novaImagem
}

let anteriorEl = document.querySelector('#anterior')
let proximoEl = document.querySelector('#proximo')

anteriorEl.addEventListener('click', () => {
  navegacao(-1)
})

proximoEl.addEventListener('click', () => {
  navegacao(1)
})