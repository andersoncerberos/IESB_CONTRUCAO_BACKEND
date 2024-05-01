require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()

app.use(express.json())

app.get('/hello', (req, res) => {
    res.json("Hello")
})

const DB_USERNAME = process.env.DB_USERNAME;
const DB_SENHA = process.env.DB_SENHA;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_SENHA}@cluster0.phifj9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Conectado ao meu MongoDB!"))
    .catch(err => console.log("Erro ao conectar no meu MongoDB: ", err))



app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})