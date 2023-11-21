let botaoExpandirRetrairEl = document.querySelectorAll('.botao-expandir-retrair')

for(indice in botaoExpandirRetrairEl)
  botaoExpandirRetrairEl[indice].addEventListener('click', (e) => {
    let clicadoEl = e.currentTarget
    let paragrafoEl = clicadoEl.parentElement

    paragrafoEl.classList.toggle('expandido')
    
    if (clicadoEl.innerHTML == '+') 
      clicadoEl.innerHTML = '-'
    
    else 
      clicadoEl.innerHTML = '+'
})