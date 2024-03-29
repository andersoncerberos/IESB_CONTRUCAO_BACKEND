//impotar express
const express = require('express')
//criar um router
const router = express.Router()
//dados locados
// criar uma lista
let listacontatos = []

//CRUD
//read buscar todos os contatos
router.get('/contatos', (req,res) => {

    res.json(listacontatos)

})

//read busca do contato pelo identificador
router.get('/contatos/:id', (req,res) => {
    const id =req.params.id
    const contato = listacontatos[id]
    res.json(contato)

})

//excluir o contato
router.delete('/contatos/:id', (req,res) => {
    const id = req.params.id
    listacontatos.splice(id, 1 )
    res.json({mensagem:"contato excluido"})

})
//atualizar contato
router.put('/contatos/:id', (req,res) => {
    const id = req.params.id
    const contato = req.body
    listacontatos[id] = contato.nome
    res.json({mensagem:"contato atualizado"})

})

// cadastra contatos
router.post('/contatos', (req,res) => {
    console.log(req.body)
    const contatos = req.body
    listacontatos.push(contatos.nome)
    res.status(201).json({ mensage:"contato criado com sucesso"})
})








//EXPORTA O ROUTER
module.exports = router