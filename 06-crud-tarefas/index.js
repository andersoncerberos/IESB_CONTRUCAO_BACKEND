//importa o express
const express = require('express')
//configurar o express
const app = express()

app.use(express.json())

const tarefas = require('./routes/tarefas')
app.use(tarefas)


//start a plaicacao na porta 3000
app.listen(3000,()=>{
    console.log("aplicação rodando em http://localhost:3000")
})
