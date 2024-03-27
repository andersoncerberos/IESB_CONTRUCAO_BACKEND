/* 
6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 
Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário 
fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
*/

const prompt = require('prompt-sync')();

console.log("execicio 6");

const salariofuncionario = Number(prompt("digite digite o salario do funcionario:"));
const quantidadecarro = Number(prompt("digite quantos carro foram vendidos:"));
const valorvendido = Number(prompt("digite o valor vendido:"));

const salariototal = salariofuncionario + valorvendido *0.05 + quantidadecarro * 100;

console.log("o valor final do funcionaro e:"+ salariototal);

