//importa o express 
const express = require('express')
//cria a aplicação 
const app  = express()


app.use(express.json())

//importar o modulo router
const LivrosRouter = require('./routes/livros')

// criando porta para aplicação
app.listen(3000, ()=>{
    console.log("aplicação rodando na porta 3000")
})