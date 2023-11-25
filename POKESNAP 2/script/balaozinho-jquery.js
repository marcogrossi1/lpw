let $marcacoes = $('.marcacao')
let $balaozinho = $('#balaozinho')

const alteraBalaozinho = (e) => {
    let $marcacaoAtual = $(e.currentTarget)

    let $titulo = $marcacaoAtual.data('titulo')
    let $conteudo = $marcacaoAtual.data('conteudo')

    $balaozinho.html(`<h2>${$titulo}</h2><p>${$conteudo}</p>`)
} 

const voltaBalaozinho = () => {
    $balaozinho.html('')
}

const segueMouse = (e) => {
    $balaozinho.css('left', `${e.pageX}px`)
    $balaozinho.css('top', `${e.pageY}px`)
}

$marcacoes.mouseover(alteraBalaozinho)
$marcacoes.mouseout(voltaBalaozinho)
$marcacoes.mousemove(segueMouse)

const alteraMarcacao = () => {
    let $x = $('#marcacao-x').val()
    let $y = $('#marcacao-y').val()
    let $largura = $('#marcacao-largura').val()
    let $altura = $('#marcacao-altura').val()

    $($marcacoes[0]).css('left', `${$x}px`)
    $($marcacoes[0]).css('top', `${$y}px`)
    $($marcacoes[0]).css('width', `${$largura}px`)
    $($marcacoes[0]).css('height', `${$altura}px`)
}

let $botaoDefinirMarcacao = $('#definir-marcacao')
$botaoDefinirMarcacao.click(alteraMarcacao)

let $inputs = $('input')
$inputs.change(alteraMarcacao)
