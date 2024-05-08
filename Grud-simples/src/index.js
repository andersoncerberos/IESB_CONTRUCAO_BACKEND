//Exercício Crud Simples - Express, MongoDB e Mongoose
//Neste exercício, sua tarefa é desenvolver uma API utilizando Express e Mongoose para 
//criar um CRUD de pessoas por nome e registrar no banco de dados MongoDB.

require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

app.use(express.json())

const PORT = 3000

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

app.get('/hello', (req, res) => {
    res.json("Hello")
})

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.phifj9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('conectado ao mongoDB'))
    .catch((err) => console.log("erro ao conactar o mongoDB", err))




app.listen(PORT, () => {
    console.log(`aplicativo rodando em  porta ${PORT}`)
})