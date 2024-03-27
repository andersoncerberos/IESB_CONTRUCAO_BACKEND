
//5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e
//dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, 
// a porcentagem do distribuidor e o imposto,
//e calcular e escrever o custo final ao consumidor


const prompt = require ('prompt-sync')();

console.log("execicio 5");

const custodefabrica = Number(prompt("digite o custo de fabrica:"));
const porcentagem = Number(prompt("digite a porcentagem:"));
const imposto = Number(prompt("digite o imposto:"));

const custofinal = custodefabrica + custodefabrica * porcentagem / 100 + custodefabrica * imposto/100;

console.log("o custo final para o consumidor e:" + custofinal);
