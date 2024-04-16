const express = require('express')
const router = express.Router()

// lista pessoas
let listadepessoas = [
    {

        "nome": "anderson",
        "idade": 36,
        "email": "anderson@email.com",
        "telefone": "619938562"

    },
    {

        "nome": "carlos",
        "idade": 25,
        "email": "carlos@email.com",
        "telefone": "61986592347"

    },
    {

        "nome": "luana",
        "idade": 48,
        "email": "kuana@email.com",
        "telefone": "61978592342"

    }


]
//read -> buscar todas a lista com a validação
router.get('/pessoas', (req, res) => {
    res.status(200).json(listadepessoas)
})
//read -> busca pelo id
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listadepessoas.find(pessoas => pessoas.id == id)
    if (pessoas) {
        return res.status(200).json(pessoas)
    }
    return res.status(404).json({ mensagem: "pessoa não encotrada" })

})

//create -> criar pessoas
router.post('/pessoas', (req, res) => {
    const dadospessoas = req.body

    if (!dadospessoas.nome || !dadospessoas.idade || !dadospessoas.email || !dadospessoas.telefone) {
        res.status(400).json({ mensagem: "o atributos devem ser preenchidos" })
    } else {
        const pessoas = {
            id: listadepessoas.length + 1,
            nome: novopessoa.nome,
            idade: novopessoa.idade,
            email: novopessoa.email,
            telefone: novapessoa.telefone

        }
        res.status(201).json(
            {
                mensagem: "pessoa criada com sucesso!",
                pessoas
            }
        )
    }
})
//deleta pessoa
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listadeproduto.findIndex(produto => produto.id == id)
    listadeproduto.splice(index, 1)
    res.json({ mensagem: "pessoa excluida" })
})
//alterar o pessoa
router.put('/pessoas/:id', (req, res) => {
    //usuario digita o id
    const id = req.params.id
    const novodados = req.body
    // compara o id do usuario com o da pessoa
    const index = listadepessoas.findIndex(pessoas => pessoas.id == id)
    //corpo dos dados
    const pessoasalterado = {
        id: listadepessoas.length + 1,
        nome: novopessoa.nome,
        idade: novopessoa.idade,
        email: novopessoa.email,
        telefone: novapessoa.telefone

    }


    listadepessoas[index] = pessoasalterado

    res.json({ mensagem: "pessoas alterada" })
})


module.exports = router