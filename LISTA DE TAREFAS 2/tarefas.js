let tarefas = []

// Exercício 1: carregar as tarefas existentes
// ------------
//
let containerEl = document.querySelector('#lista-tarefas');

function insereTarefaNaPagina(tarefa) {
  // 1. cria o elemento
  let tarefaLiEl = document.createElement('li');
  // 2. configura
  tarefaLiEl.innerHTML = tarefa.nome;
  tarefaLiEl.classList.add('item-tarefa');
  if (tarefa.marcado) {
    tarefaLiEl.classList.add('marcado');
  }
  // 3. insere na árvore
  // Desafio 1: novas tarefas no início
  let primeiraTarefaEl = containerEl.querySelector(':first-child');
  containerEl.insertBefore(tarefaLiEl, primeiraTarefaEl);
}

// limpa a <ul> do que quer que esteja lá
containerEl.innerHTML = '';
// chama a função que insere na página para cada tarefa
// do vetor 'tarefas'
tarefas.forEach(insereTarefaNaPagina);


// Exercício 2: incluir uma nova tarefa
// -----------
//

let botaoIncluirEl = document.querySelector('#incluir-nova-tarefa');
let nomeInputEl = document.querySelector('#nova-tarefa-nome');
botaoIncluirEl.addEventListener('click', function() {
  // cria um novo objeto 'tarefa'
  let novaTarefa = {
    nome: nomeInputEl.value,
    categoria: 'outros',
    marcado: false
  };

  // coloca-o no vetor 'tarefas'
  tarefas.push(novaTarefa);
  // cria o <li> referente a essa tarefa e o
  // insere na página
  insereTarefaNaPagina(novaTarefa);

  // limpar o input e devolver o foco pra ele
  nomeInputEl.value = '';
  nomeInputEl.focus();
});

// Exercício 3: salvar e carregar o nome do dono da lista
// -----------
//
let nomeUsuarioInputEl = document.querySelector('#nome-usuario')
let salvarBotaoEl = document.querySelector('#salvar')
let carregarBotaoEl = document.querySelector('#carregar')

const salvaInformacoes = () => {
  localStorage.setItem('usuario', nomeUsuarioInputEl.value)
  localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

let nomeUsuario = localStorage.getItem('usuario')

const carregaInformacoes = () => {
  nomeUsuarioInputEl.innerHTML = nomeUsuario
  
  containerEl.innerHTML = ''
  
  let tarefasCarregadas = localStorage.getItem('tarefas')
  tarefasCarregadas = JSON.parse(tarefasCarregadas)

  for(let i = 0; i < tarefasCarregadas.length; ++i) {
    let novaTarefa = {
      nome: tarefasCarregadas[i].nome,
      categoria: 'outros',
      marcado: false
    }

    tarefas.push(novaTarefa);
    insereTarefaNaPagina(novaTarefa);

    nomeInputEl.value = '';
    nomeInputEl.focus();
  }

  tarefasCarregadas
}
salvarBotaoEl.addEventListener('click', salvaInformacoes)
carregarBotaoEl.addEventListener('click', carregaInformacoes)

// Desafio 1
// -----------
//
let botaoMinimizarEl = document.querySelector('#minimizar')
let marcaEl = document.querySelector('#marca')

sessionStorage.setItem('minimizado', marcaEl.classList == 'minimizado')

if(sessionStorage.getItem('minimizado') === 'true') {
  marcaEl.classList.remove('minimizado')
  sessionStorage.setItem('minimizado', marcaEl.classList == 'minimizado')
}

botaoMinimizarEl.addEventListener('click', () => {
    marcaEl.classList.toggle('minimizado')
    sessionStorage.setItem('minimizado', marcaEl.classList == 'minimizado')
})