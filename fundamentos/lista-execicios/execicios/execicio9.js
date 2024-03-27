//9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require('prompt-sync')();

console.log("execicio 8");

const numero1 = Number(prompt("digite o primeiro numero:"));
const numero2 = Number(prompt("digite o segundo numero:"));

const soma = (numero1 + numero2);
const multiplicar = soma + numero1;

console.log("a soma do dois numeros e:" + soma);
console.log("o resultado da multiplicação e:" + multiplicar);