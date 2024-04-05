const express = require('express')
const app = express()
app.use(express.json())
/*1. Faça uma api para calcular o estoque médio de uma peça, 
sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
*/

//path params
app.get('/execicio1/:qtdminima/:qtdmaxima', (req, res) => {
  const quantminima = Number(req.params.qtdminima)
  const quantmaxima = Number(req.params.qtdmaxima)

  const estomedio = (quantmaxima + quantminima) / 2
  res.send(`estoque  medio ${estomedio}`)
})
//query params
app.get('/execicio1', (req, res) => {
  const quantminima = Number(req.query.qtdminima)
  const quantmaxima = Number(req.query.qtdmaxima)

  const estomedio = (quantmaxima + quantminima) / 2
  res.send(`estoque  medio ${estomedio}`)
})


//body
app.post('/execicio1', (req, res) => {
  const quantmaxima = req.body.qtdminima
  const quantminima = req.body.qtdmaxima

  const estomedio = (quantmanima + quantmaxima) / 2

  res.send(`estoque medio ${estomedio}`)
})

//2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais.
//Escreva uma api que receba o salário de um funcionário e imprima o valor do salário 
//reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.
app.get('/exercicio2/:salario', (req, res) => {
  const salariofuncionario = Number(req.params.salario)
  if (salario < 1000) {
    const reajuste = (salario * 30) / 100
    const novosalario = reajuste + salario
    res.send('o novo valor do funcionario e' + novosalario)
  } else {
    res.send('o funcionario nao tem direito ao aumento')
  }
})
//3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, 
//o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. 
//Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total.

app.get('/execicio3', (req, res) => {
  const nomevendedo = req.body.nomevendedo
  const salariovendedor = req.body.salariovendedor
  const totaldevendas = req.body.totaldevendas
  const porcentagem = req.body.porcentagem

  const salariofinal = salariovendedor + (totaldevendas * (porcentagem / 100))
  res.send("o nome do vendedoor e " + nomevendedo + " e o seu salario e " + salariofinal)

})

//4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou
//para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância
// / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade 
// media calculada> km/h.
app.post('/execicio4', (req, res) => {
  const nomepiloto = req.body.nomepiloto
  const distância = req.body.distância
  const tempo = req.body.tempo
  const velocidade = distancia / tempo

  res.send('A velocidade média do ' + nome + ' foi ' + velocidade + ' km/h.')

})

/*
5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30%
 */
app.get('/execicio5/:salario', (req, res) => {
  const salario = Number(req.params.salario)

  if (salario < 2000) {
    const reajuste = (salaria * 50) / 100
    res.send('o novo valor do funcionario e ' + reajuste)
  } else {
    const reajuste = (salaria * 30) / 100
    res.send('o novo valor do funcionario e ' + reajuste)

  }

})
/*
6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7
*/
app.post('/execicio6', (req, res) => {
  const sexo = req.body.sexo
  const altura = req.body.altura
  const peso = req.body.peso
  if (sexo === "masculino") {
    const pesomediomasculino = (72, 7 * altura) - 58
    res.send("o peso ideal do homen e" + pesomediomasculino)
  } else {
    const pesomediofeminio = (62.1 * altura) - 44.7
    res.send("o peso ideal da mulher e " + pesomediofeminio)
  }

})

//7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
//  • O maior preço lido; e
//  • A média aritmética dos preços dos produtos.

app.get('/execicio7', (req, res) => {
  const corpo = req.body
  let listaproduto = []

  corpo.forEach(produto => {
    listaproduto.push(produto)
  });

  let soma = 0
  listaproduto.forEach(produto => {
    soma = soma + produto.preco
  })
  const media = soma / listaproduto.length
  //calcular o maior preço
  const maiorpreco = 0
  //logica
  listaproduto.forEach(produto => {
    if (produto.preco > maiorpreco) {

      maiorpreco = produto.preco
    }
  })

  const resultado = {
    precomedio: media.toFixed(2)

  }
  res.json(resultado)
})

/*
8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, 
conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o
 seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. 
 Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%
*/
//body
app.post('/execicio8', (req, res) => {
  const salario = req.body.salario
  const cargo = req.body.cargo
  const codigo = req.body.codigo

  switch (codigo) {
    case 101:
      percentualAumento = 0.05;
      break;
    case 102:
      percentualAumento = 0.075;
      break;
    case 103:
      percentualAumento = 0.10;
      break;

  }
  novosalario = salario + (salario * percentualAumento) / 100
  res.send('o cargo do funiconario e ' + cargo + 'com o salario de ' + salario + 'e o novo salario e'+ novosalario)
  

})

/*
9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.
*/
app.post('/execicio1', (req, res) => {
  const salarioMinimo = req.body.salarioMinimo;
    const horasTrabalhadas = req.body.horasTrabalhadas;
    const dependentes = req.body.dependentes;
    const horasExtras = req.body.horasExtras;

    const valorHoraTrabalhada = salarioMinimo / 5;
    const salarioMes = horasTrabalhadas * valorHoraTrabalhada;
    const acrescimoDependentes = dependentes * 32;
    const valorHoraExtra = valorHoraTrabalhada * 1.5;
    const valorHorasExtras = horasExtras * valorHoraExtra;
    const salarioBruto = salarioMes + acrescimoDependentes + valorHorasExtras;

    let irrf;
    if (salarioBruto < 2000) {
        irrf = 0;
    } else if (salarioBruto >= 2000 && salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1;
    } else {
        irrf = salarioBruto * 0.2;
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;
})

app.listen(3000, () => {
  console.log("aplicação iniciada em http:localhost:3000")
})