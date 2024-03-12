/*
2. Escreva um script para ler o número total de eleitores de um município,
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual
que cada um representa em relação ao total de eleitores.
*/

const prompt = require('prompt-sync')();

console.log("execicios 2");
console.log("calculo de porcentagem");


const votosembranco = Number(prompt("digite o total de votos em branco:"));
const votosnulos = Number(prompt("digite o total de votos nulos:"));
const votosvalidos = Number(prompt("digite o total de votos validos:"));

const total  = votosembranco + votosnulos + votosvalidos;

const porcentagembranco = ( votosembranco / total )*100;
const porcentagemnulo = ( votosnulos / total )*100;
const porcentagemvalido = ( votosvalidos / total )*100;

console.log ("o total de eleitores e:" + total);
console.log ("porcentagem de votos brancos e:" + porcentagembranco);
console.log ("porcentagem de votos nulos e:" + porcentagemnulo);
console.log ("porcentagem de votos validos e:" + porcentagemvalido);