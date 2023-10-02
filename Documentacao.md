````Javascript

Nesta aplicação vamos aprender o uso do metodo filter de arrays como visto anteriormente, além disso veremos,
metodos e propriedades de manipulação de elementos do DOM.


/*Propriedades para manipulação de DOM.*/

parentNode              // Usada para acessar o nó pai de um elemento no DOM.

childNode[nodenumber]   // É uma lista de nós filhos do elemento. [nodenumber] permite acessar um nó filho específico pelo  seu índice.

firstChild              // Usada para acessar o primeiro nó filho de um elemento.

lastchild               // Usada usada para acessar o último nó filho de um elemento.

nextSibling             // Usada para acessar o nó irmão seguinte (posterior) de um nó no DOM.

previousSibling         // Usada para acessar o nó irmão anterior (anterior) de um nó no DOM.


/*-------------------------------------------------------------------------------------------------------------------------*/


/*Metodos para manipulação de DOM.*/

.remove()           // Usado para remover um elemento do DOM. Ele exclui o elemento atual do qual é chamado.

Exemeplo: 
const elemento = document.getElementById('elemento');
elemento.remove();


.insertBefore()     // Usado para inserir um elemento como filho antes de outro elemento no DOM. Requer dois argumentos: o elemento que será inserido e o elemento antes do qual será inserido.

Exemplo:
lista.insertBefore(newNode, referenceNode);

lista: O nó (elemento) no qual deseja inserir o novo nó.
newNode: O nó (elemento) que deseja inserir.
referenceNode: O nó antes do qual deseja inserir o novo nó.

Observação: 
Caso queira inserir o elemento após o nó desejado, basta adiconar o nextSibling.

lista.insertBefore(newNode, referenceNode.nextSibling);

.toggle()           // Usado para alternar (adicionar ou remover) uma classe em um elemento. Esse método faz parte da interface DOMTokenList associada à propriedade classList de um elemento. Se a classe estiver presente, ela será removida; se não estiver, será adicionada.

Exemplos:
elemento.classList.toggle(nomeDaClasse);

elemento: O elemento HTML ao qual você deseja aplicar a operação.
nomeDaClasse: O nome da classe CSS que você deseja alternar.

Se a classe estiver presente no elemento, ela será removida; se estiver ausente, ela será adicionada.

/*-------------------------------------------------------------------------------------------------------------------------*/



EXEMPLOS DE APLICAÇÃO:

EXEMPLO: REMOVE     

Exemplo:
HTML
<div id="meuElemento">Este é o elemento a ser removido</div>


JAVASCRIPT
const meuElemento = document.getElementById('meuElemento');

// Remover o elemento do DOM
meuElemento.remove();


/*
 Neste exemplo, selecionamos um elemento com o ID "meuElemento" e usamos o método .remove() para removê-lo do DOM. 
 O elemento selecionado é excluído e não será mais exibido na página.
*/



/*-------------------------------------------------------------------------------------------------------------------------*/
EXEMPLO: INSERTBEFORE   

Exemplo:
HTML
<div id="meuElemento">Este é meu elemento existente</div>

JAVASCRIPT
const meuElemento = document.getElementById('meuElemento');

// Criar um novo elemento <p>
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Este é um novo parágrafo que será inserido antes do elemento existente.';

// Inserir o novo parágrafo antes do elemento existente
meuElemento.parentNode.insertBefore(novoParagrafo, meuElemento);

/*
 Neste exemplo, criamos um novo elemento <p>, definimos seu conteúdo de texto e, em seguida,
usamos .insertBefore() para inseri-lo antes do elemento existente com o ID "meuElemento".
*/



/*-------------------------------------------------------------------------------------------------------------------------*/
EXEMPLO: TOGGLE       

Exemplo:
HTML
<button id="meuBotao">Clique em mim</button>


JAVASCRIPT
const meuBotao = document.getElementById('meuBotao');

meuBotao.addEventListener('click', () => {
  // Toggle: se a classe "ativo" estiver presente, ela será removida; se não estiver, será adicionada.
  meuBotao.classList.toggle('ativo');
});


CSS
/* Defina estilos diferentes para a classe 'ativo' */
.ativo {
  background-color: blue;
  color: white;
}


/*
 Neste exemplo, cada vez que o botão é clicado, a classe "ativo" é alternada no elemento do botão. 
 Se a classe "ativo" estiver presente, ela será removida; se não estiver, será adicionada, 
alternando os estilos definidos no CSS.
*/


/*-------------------------------------------------------------------------------------------------------------------------*/




````