/*
 Bem vindo a versão um do jogo CAT SHOWDOWN.
 Criação baseada em javascript, para prática.
 */

//  trabalhando com a altura e largura da página.
let altura = 0;
let largura  = 0;

 //Ajustando a tela.
 function adjustScreen(){
      altura = window.innerWidth;
      largura = window.innerHeight;
    console.log(largura, altura);
 }
   

adjustScreen();

//Criando posição dos gatinhos aleatórios. 
function posicaorandom(){
// math.floor para tirar deixar valor fechado e random com math.random
let posicaoX = Math.floor(Math.random() * largura) - 90;  // -90 para a posição aleatória seja no máximo 90 px menos que o limite
let posicaoY = Math.floor(Math.random() * altura) - 90; // -90 para a posição aleatória seja no máximo 90 px menos que o limite

//Operador ternario para controlar que as posições não podem ser 0
posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;
console.log(posicaoX, posicaoY)

//Criar elemento hhtml usando DOM.
let cat = document.createElement('img');
cat.src = 'images/cat2.png'; // pegando a imagem do gatinho
cat.className = 'cat'; // pegando a class cat
cat.style.left = posicaoX + 'px'; // concatenando o style com posição
cat.style.top = posicaoY + 'px';// concatenando o style com posição
cat.style.position = 'absolute';// transformando em absoluto

//adicionando um filho ao body
document.body.appendChild(cat);
}