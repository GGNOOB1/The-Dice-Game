// Declaração das variáveis que geram números aleatórios
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

// Atribuindo os números aleatórios ao respectivo diretório de imagem através do DOM
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

// Validação para saber quem venceu, perdeu e empatou o jogo.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";    
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";    
} else {
    document.querySelector("h1").innerHTML = "Draw!!";    
}
