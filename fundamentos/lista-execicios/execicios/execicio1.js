let prompt = require('prompt-sync')();

let nome = prompt("qual seu nome: ");

console.log(" OLA  " + nome + " bem vindo ");

let idade =prompt("qual sua idade:");

if (idade >= 18){

    console.log("voce e maior de idade");
}else{
    console.log("voce e menor de idade");
}

let notaprova1 = prompt("qual sua nota da prova1: ");
let notaprova2 = prompt("qual sua nota da prova2:");

let nota1 = Number(notaprova1);
let nota2 = Number(notaprova2);

media = (nota2 + nota2)/2;
console.log("media:" + media);

if(media >= 6){
    console.log("aprovado");
}else{
    console.log("reprovado");
}