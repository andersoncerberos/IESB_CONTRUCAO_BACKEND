require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()

app.use(express.json())

const Tarefa = mongoose.model('tarefa', { nome: String })

app.get('/', (req, res) => {
    res.json("Hello")
})

app.post('/tarefas', async (req, res) => {
    const tarefas = new Tarefa({ nome: req.body.nome })
    await tarefas.save()
    res.json(tarefas)
})
app.get('/tarefas', async (req, res) => {
    const tarefas = await Tarefa.find()
    res.json(tarefas)
})
app.get('/tarefas/:id', async (req, res) => {
    const tarefas = await Tarefa.findById(req.params.id)
    res.json(tarefas)
})
app.put('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, { nome: req.body.nome }, { new: true })
    res.json(tarefa)


})
app.delete('/tarefas/:id', async (req, res) => {
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json()

})
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.phifj9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Conectado ao meu MongoDB!"))
    .catch((err) => console.log("Erro ao conectar no meu MongoDB: ", err))





app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})