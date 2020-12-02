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
function posicaoRandom(){

//remover gato anterior, se tiver gato ne.  não sei pq isso daqui foi muito hard.
if(document.getElementById('cat')){
document.getElementById('cat').remove();
}

// math.floor para tirar deixar valor fechado e random com math.random
let posicaoX = Math.floor(Math.random() * largura) - 90;  // -90 para a posição aleatória seja no máximo 90 px menos que o limite
let posicaoY = Math.floor(Math.random() * altura) - 90; // -90 para a posição aleatória seja no máximo 90 px menos que o limite

//Operador ternario para controlar que as posições não podem ser 0
posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;
console.log(posicaoX, posicaoY)

//Criar elemento html usando DOM.
let cat = document.createElement('img');
cat.src = 'images/cat2.png'; // pegando a imagem do gatinho
cat.className = tamanhoRandom() +' '+ ladoAleatorio(); // pegando a class cat e criando random, tamanho e lado
cat.style.left = posicaoX + 'px'; // concatenando o style com posição
cat.style.top = posicaoY + 'px';// concatenando o style com posição
cat.style.position = 'absolute';// transformando em absoluto
cat.id = 'cat'

//adicionando um filho ao body
document.body.appendChild(cat);


}

//Função para criar tamanho random dos gatinhos
function tamanhoRandom(){
  let classe = Math.floor(Math.random() * 3); // Resultado sera algo entre 0 e muito próximo de 3
  // console.log(classe);
  switch(classe){ // pegando nossa variavel classe para  mudar os tamanhos.
    case 0:
      return 'cat';
    case 1:
      return 'cat2';
    case 2:
      return 'cat3';
    case 3:
      return 'cat4';
  }

}
// criando lado estabelecido por propriedades de estilo, transformando a escala da imagem.
function ladoAleatorio(){
  let classe = Math.floor(Math.random() * 2); // Resultado sera algo entre 0 e muito próximo de 2
  // console.log(classe);
  switch(classe){ // pegando nossa variavel classe para  mudar as dimensões 2D.
    case 0:
      return 'ladoA';
    case 1:
      return 'ladoB';
   
  }
}

