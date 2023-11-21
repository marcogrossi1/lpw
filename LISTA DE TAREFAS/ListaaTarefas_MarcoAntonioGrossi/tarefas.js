let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
]

let novaTarefaInputEl = document.querySelector('#nova-tarefa-nome')
let categoriaInputEl = document.querySelector('#nova-tarefa-categoria')

const insereTarefaNaPagina = (tarefa) => {
  let listaEl = document.createElement('li')
  let itemInicialEl = document.querySelector('.item-tarefa')
  
  listaEl.innerHTML = tarefa.nome
  listaEl.classList.add ('item-tarefa')
  listaEl.classList.add(`categoria-${tarefa.categoria}`)

  for(let i = 2; i < tarefas.length; ++i)
    listaEl.classList.add (`categoria-${categoriaInputEl.value}`)

  if(tarefa.marcado == true)
    listaEl.classList.add('marcado')

  listaTarefas.insertBefore(listaEl, itemInicialEl)
}

const insereTarefaNoObjeto = () => {
  let novaTarefa = {
    nome: novaTarefaInputEl.value,
    categoria: categoriaInputEl.value,
    marcado: false
  }

  tarefas.push(novaTarefa)

  insereTarefaNaPagina(novaTarefa)

  novaTarefaInputEl.value = ''
  novaTarefaInputEl.focus()
}

// Incluindo novas tarefas no obj 'tarefas' ao clique do botão Incluir
let botaoIncluirEl = document.querySelector('#incluir-nova-tarefa')
botaoIncluirEl.addEventListener('click', insereTarefaNoObjeto)

// Incluindo novas tarefas no obj 'tarefas' ao clique da tecla <ENTER>
novaTarefaInputEl.addEventListener('keyup', (e) => {
  if(e.key === 'Enter')
    insereTarefaNoObjeto()
})

// Inserindo tarefas do obj 'tarefas' na página
let listaTarefas = document.querySelector('#lista-tarefas')

listaTarefas.innerHTML = ''

tarefas.forEach(insereTarefaNaPagina)