/*
4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com
 a porcentagem do distribuidor e dos impostos 
 (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
 seja de 28% e os impostos de 45%, escrever um script para ler o custo de 
fábrica de um carro, calcular e escrever o custo final ao consumidor.
*/

const prompt = require('prompt-sync')();

console.log("execicio 4");

const custodefabrica = Number(prompt("digite o custo de fabrica:"));

const porsentagemdodistribuidor = custodefabrica * 0.28;
const posetagemdeimposte = custodefabrica * 0.45;

const custofinal = custodefabrica + porsentagemdodistribuidor + posetagemdeimposte;

console.log("o custo final do automovel e:" + custofinal);

