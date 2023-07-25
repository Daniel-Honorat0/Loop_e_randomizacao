const numeroCerto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
//const numeroCerto = 7; Para usar um número fixo
let tentativa = "";
let acertou = false;

for (let contador = 0; contador <3; contador++){

    tentativa = prompt("Vamos jogar? Tente adivinhar o número entre 0 e 10:");

if(tentativa == numeroCerto){
    alert(`Você acertou!!! O número era ${numeroCerto}.`);
    acertou = true;
    break
}

alert("Número errado!");
}
//Esse ! transforma a Variavel "acertou" que antes falsa, em verdadeira para finalizar o for  
if(!acertou){
    alert(`Suas tentativas acabaram. O número certo era ${numeroCerto}`);
}