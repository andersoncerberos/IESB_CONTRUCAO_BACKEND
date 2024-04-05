const express = require('express')
const app = express()

//middlewares
app.use(express.json())

//rotas
//importado 
const produtos = require('./routes/produtos')
app.use(produtos)

//start o projeto
app.listen(3000,()=>{
    console.log("aplicação rodando em http://localhost:3000")
})
