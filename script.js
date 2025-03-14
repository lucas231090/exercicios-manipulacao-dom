// Exercício 1: Alterando Texto e Cor
function alterarTextoCor() {
  let elemento = document.getElementById('texto');
  elemento.textContent = 'Texto alterado!';
  elemento.style.color = 'red';
}

// Exercício 2: Criando e Removendo Elementos
function adicionarElemento() {
  let novoParagrafo = document.createElement('p');
  novoParagrafo.textContent = 'Parágrafo dinâmico!';
  document.getElementById('container').appendChild(novoParagrafo);
}

function removerElemento() {
  let container = document.getElementById('container');
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}

// Exercício 3: Lista Interativa
function adicionarItem() {
  let input = document.getElementById('itemInput');
  let texto = input.value.trim();

  if (texto !== '') {
    let li = document.createElement('li');
    li.textContent = texto;

    // Remover o item ao clicar
    li.addEventListener('click', function (event) {
      event.target.remove();
    });

    document.getElementById('lista').appendChild(li);
    input.value = '';
  }
}
