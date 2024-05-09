//Exercício Crud Simples - Express, MongoDB e Mongoose
//Neste exercício, sua tarefa é desenvolver uma API utilizando Express e Mongoose para 
//criar um CRUD de pessoas por nome e registrar no banco de dados MongoDB.

require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const PORT = 3000



app.use(express.json())

const Pessoas = mongoose.model('pessoas', { nome: String })

app.post('/pessoas', async (req, res) => {
    const tarefas = new Pessoas({ nome: req.body.nome })
    await Pessoas.save()
    res.json(tarefas)
})
app.get('/pessoas', async (req, res) => {
    const tarefas = await Pessoas.find()
    res.json(Pessoas)
})
app.get('/pessoas/:id', async (req, res) => {
    const tarefas = await Pessoas.findById(req.params.id)
    res.json(tarefas)
})
app.put('/pessoas/:id', async (req, res) => {
    const Pessoas = await Pessoas.findByIdAndUpdate(req.params.id, { nome: req.body.nome }, { new: true })
    res.json(pessoas)


})
app.delete('/pessoas/:id', async (req, res) => {
    await Pessoas.findByIdAndDelete(req.params.id)
    res.json()

})


const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD



mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.phifj9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('conectado ao mongoDB'))
    .catch((err) => console.log("erro ao conactar o mongoDB", err))




app.listen(PORT, () => {
    console.log(`aplicativo rodando em  porta ${PORT}`)
})