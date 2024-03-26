const express = require('express')
const app = express()
app.use(express.json())
/*1. Faça uma api para calcular o estoque médio de uma peça, 
sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
*/

//path param
app.get('/execicio1/:qtdminima/:qtdmaxima', (req,res) => {
     const quantminima = Number(req.params.qtdminima)
     const quantmaxima = Number(req.params.qtdmaxima)

     const estomedio = (quantmaxima + quantminima)/2
    res.send(`estoque  medio ${estomedio}`)
})
//query params
app.get('/execicio1', (req,res) => {
    const quantminima = Number(req.query.qtdminima)
    const quantmaxima = Number(req.query.qtdmaxima)

    const estomedio = (quantmaxima + quantminima)/2
   res.send(`estoque  medio ${estomedio}`)
})


//body
app.post('/execicio1',(req,res)=>{
    const quantmaxima = req.body.qtdminima
    const quantminima = req.body.qtdmaxima

    const estomedio = (quantmanima + quantmaxima)/ 2

    res.send(`estoque medio ${estomedio}`)
})

//2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais.
//Escreva uma api que receba o salário de um funcionário e imprima o valor do salário 
//reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.



//7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
//  • O maior preço lido; e
//  • A média aritmética dos preços dos produtos.

app.get('/execicio7', (req,res) => {
  const corpo = req.body
  let listaproduto = []

  corpo.forEach(produto => {
    listaproduto.push(produto)
  });

  let soma = 0
  listaproduto.forEach(produto => {
    soma = soma + produto.preco
  })
  const media = soma/ listaproduto.length
//calcular o maior preço
const maiorpreco = 0
//logica


  const resultado = {
    precomedio: media.toFixed(2)
  }
  res.json(resultado)
})




app.listen(3000,() => {
    console.log("aplicação iniciada em http:localhost:3000")
})