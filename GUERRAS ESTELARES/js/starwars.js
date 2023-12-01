let container = document.querySelector('#filmes')

const transformaRomano = (numero) => {    
    switch(numero) {
        case 6: 
            return 'VI'
        case 5:
            return 'V'
        case 4:
            return 'IV'
        case 3:
            return 'III'
        case 2:
            return 'II'
        case 1:
            return 'I'
    }
}

let respostaEl = ''
container.innerHTML = ''

const iniciaFilmes = (resposta) => {
    for(let i = 0; i < resposta.count; ++i) {
        let liEl = document.createElement('li')
        
        respostaEl.results.sort((a,b) => {
            if(a.episode_id > b.episode_id)
                return 1

            if(a.episode_id < b.episode_id)
                return -1

            return 0
        })

        let titulo = resposta.results[i].title
                
        liEl.dataset.idEpisodio = `${i+1}`
        liEl.innerHTML = `Episode ${transformaRomano(i+1)}: ${titulo}`
        liEl.id = 'episodio'

        container.appendChild(liEl)
    }
}

const alteraIntro = (id) => {
    let introEl = document.querySelector('#intro')
    introEl.innerHTML = `EPISODIO ${transformaRomano(id+1)}
                        ${respostaEl.results[id].title}

                        ${respostaEl.results[id].opening_crawl}`
}

const audio = new Audio('audio/tema-sw.mp3')

let bodyEl = document.querySelector('body')
bodyEl.addEventListener('click', function foo () {
    audio.play()

    this.removeEventListener('click', foo)
})

// AJAX

$.ajax({
    url: 'https://swapi.dev/api/films',
    dataType: 'json',
    success: resposta => {
        respostaEl = resposta
        iniciaFilmes(resposta)

        let filmesEl = document.querySelectorAll('#episodio')

        for(let i = 0; i < filmesEl.length; ++i)
            filmesEl[i].addEventListener('click', () => {
                alteraIntro(i)
            })
    },
    method: 'GET'
})

/*
 XMLHttpRequest
let response = new XMLHttpRequest()
response.onreadystatechange = () =>iniciaFilmes(response)
response.responseType = 'json'
response.open('GET', 'https:swapi.dev/api/films')
*/

/* 
  fetch 
fetch('https://swapi.dev/api/films', {
    method: 'GET',
    redirect: 'follow'
})

    .then(resposta => iniciaFilmes(resposta))
*/