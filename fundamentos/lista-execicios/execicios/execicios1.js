/*1. Faça um Programa que receba quatro notas de um aluno, 
calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou 
igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.*/

const prompt = require('prompt-sync')();

console.log("execiciso 1");
console.log("calculo de media");

const nota1 = Number (prompt("digite a primeira nota:"));
const nota2 = Number (prompt("digite a segunda nota:"));
const nota3 = Number (prompt("digite a terceira nota:"));
const nota4 = Number (prompt("digite a quarta nota:"));

const media = (nota1 + nota2 + nota3 + nota4)/ 4;

console.log("suame media e:"+ media);

if(media >= 7){
    console.log("aprovado");
}else{
    console.log("reprovado");
}
