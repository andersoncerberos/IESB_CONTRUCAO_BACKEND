/*
3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de 
reajuste. Calcular e escrever o valor do novo salário.
 */

const prompt = require('prompt-sync')();

console.log("execicios 3");
console.log("calculo de reajuste de salario");

const salarioinicial = Number (prompt("digite o salario:"));
const reajuste = Number(prompt("digite o reajuste:"));

const novosalario = (salarioinicial * reajuste / 100) + salarioinicial;

console.log("o valor do seu novo salario e:"+ novosalario);



