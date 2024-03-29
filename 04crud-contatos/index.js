//imports
const express = require('express')
const tutorial = require('./routes/tutorial')
const subrota = require('./routes/sub-rota')
const contatos = require("./routes/contatos")
//configuração
const app = express()
//middiwares
//middiwares que transforma o corpo da requisição em objeto jsn
//dentro da nossa aplicação
app.use(express.json())
//trazendo as rotas para o modulos contatos
app.use(contatos)

//trazendo as rotas do modulo tutorial para dentro da minha aplicação
app.use(tutorial)
// trazendo as rotas do modulo sub rota
app.use('/rota', subrota)

//contrato -> configuração das rotas e da logica
app.get("/", (req, res) => {
    res.send("aplicação rodando")
})



// start da nossa aplicação n porta 3000
app.listen(3000, () => {
    console.log("api rodando em http://localhost:3000")
})