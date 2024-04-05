const express = require('express')
const router = express.Router()

// lista locada
let listadeproduto = [
    {
        id: 1,
        nome: "coca cola",
        preço: 4.99
    },
    {
        id: 2,
        nome: "batata frita",
        preço: 9.99
    },
    {
        id: 3,
        nome: "arroz",
        preço: 29.99
    }


]
//read -> buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.json(listadeproduto)
})
//read -> buscar produtos pelo id
router.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listadeproduto.findIndex(produtob => produtob.id == id)
    const produto = listadeproduto[index]
    res.json(produto)
})

//create -> criar produto
router.post('/produtos', (req, res) => {
    const novoproduto = req.body


    const produto = {
        id: listadeproduto.length + 1,
        nome: novoproduto.nome,
        preço: novoproduto.preço
    }
    listadeproduto.push(produto)

    res.json({ mensagem: "produto cadatrado com sucesso" })
})
//deleta produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listadeproduto.findIndex(produto => produto.id == id)
    listadeproduto.splice(index, 1)
    res.json({ mensagem: "produto excluido com sucesso" })
})
//aletar oproduto
router.put('/produtos/:id', (req, res) => {
    //usuario digita o id
    const id = req.params.id
    // compara o id do usuario com o do produto
    const index = listadeproduto.findIndex(produto => produto.id == id)
    //corpo dos dados
    const novodados = req.body
    const protudoalterado ={
    
        id: id,
        nome: novodados.nome,
        preco: novodados.preco
    }

    listadeproduto[index] = protudoalterado

    res.json({ mensagem: "produto alterado com sucesso" })
})


module.exports = router