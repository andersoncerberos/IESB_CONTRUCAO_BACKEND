/*7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 4 e 6. */

const prompt = require('prompt-sync')();

console.log("execicio 7");

const nota1 = Number(prompt("digite a primeira nota:"));
const nota2 = Number(prompt("digite a segunda nota:"));

const media = (nota1 + nota2)/2;

console.log("sua media e:" + media);

const ponderada = (media * 4 + media * 5)/10;

console.log("media ponderada e:" + ponderada);