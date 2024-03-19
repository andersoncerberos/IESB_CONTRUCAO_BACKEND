const express = require('express') // criando um instancia do modulo express
const app = express()// criando a aplicação



//definido os caminhos do aplicativo
app.get('/', (req,res) =>{

    res.send("ola")
})

app.get('/hello',(req,res) =>{

    res.send("hello word")
} )

app.get('/nome',(req,res) =>{

    res.send("anderson carlos")
} )

app.get('/execicio01',(req,res) =>{

    const nota1 = 10
    const nota2 = 10
    const media = (nota1 + nota2)/ 2
    res.send("media" + media)
} )

app.get('/teste',(req,res) => {

    res.send("teste ok")
})
app.post('/teste',(req,res) => {

    res.send("teste post ok")
})

/*1. Faça um Programa que receba quatro notas de um aluno, 
calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou 
igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.*/
// path param
app.get('/execicio01/:nota1/:noat2/:nota3/:nota4',(req,res) =>{
    const nota1 = Number((req.params.nota1))
    const nota2 = Number((req.params.nota2))
    const nota3 = Number((req.params.nota3))
    const nota4 = Number((req.params.nota4))

    const media = (nota1 + nota2 + nota3 + nota4)/ 4
// comando ternario mesma estrutura de um if else
    const mensagem = media >= 7 ? "aprovado" : "reprovado"

   
   
    console.log(req.params)

    res.send('media '+ media + " o aluno foi: " + mensagem)
    

} )

// crie um empoint que devolva seu nome e sua matricula
app.get('/aluno', (req,res) =>{

    res.send("anderson carlos matricula \n 24114290042")
   
})

app.get('/aluno/:matricula', (req,res) =>{
    console.log(req.params)
    res.send("ok")
   
})

//path params
app.get('/aluno/:nome/:matricula/:curso', (req,res) => {
    console.log(req,res)
    res.send(`
        ola${req.params.nome}, sua matricula e ${req.params.matricula}, seu curso e ${req.params.curso}
    `)
})

//query parans
app.get('/pessoa', (req,res)=>{
    console.log(req.query)
    res.send("ok")
})






// executando a aplicação na porta definida
app.listen(3000,() =>{

    console.log('api iniciada  rodado em HTT://localhos:3000')
} )

