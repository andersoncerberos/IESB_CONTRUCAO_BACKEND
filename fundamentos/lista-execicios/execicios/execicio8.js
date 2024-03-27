/*8. Faça um script que determine o volume de uma caixa d’água cilíndrica, 
sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura */

const prompt = require('prompt-sync')();

console.log("execicio 8");

const raio = Number(prompt("digite o raio:"));
const altura = Number(prompt("digite o altura:"));

const volume = Math.PI * Math.pow(raio,2) * altura;

console.log("o volume da caixa de agua e:" + volume);
