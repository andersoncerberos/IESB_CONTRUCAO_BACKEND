const express = require("express")// importar o express

const route = express.Router()// criando o router

//criando array
let listaDeCarros = [
    {
        id: 1,
        marca: "vwolksvagem",
        modelo: "gol",
        cor: "rosa",
        valor: 80000
    },
    {
        id: 2,
        marca: "renault",
        modelo: "kiwd",
        cor: "branco",
        valor: 72000.99
    }
]

// buscar todos os carros
route.get('/carros', (req, res) => {
    res.json(listaDeCarros)
})

//busca de carros por id
route.get("/carros/:id", (req, res) => {
    const id = req.params.id
    const carro = listaDeCarros.find(carro => carro.id == id)
    //fazer a validação
    //quando tem so uma variavel dentro do if ele considera como verdadeira
    if (carro) {
        return res.json(carro)
    }
    return res.status(404).json({ mensagem: "carro nao encotrado" })
})
//cadastra um carro
route.post('/carro', (req, res) => {
    const dados = req.body
    if (!dados.marca || !dados.modelo || !dados.cor || !dados.valor) {
        return res.status(400).json({ mensagem: "campos marca,cor,e valor sao obrigatorios" })
    }
    const carro = [
        {
            id: Math.round(Math.random() * 1000),
            marca: dados.marca,
            modelo: dados.modelo,
            cor: dados.carro,
            valor: dados.valor
        }
    ]
    listaDeCarros.push(carro)
    if (index == -1) {
        return res.status(201).json({ mensagem: "carros criado com sucesso", carro })
    }
    const carroatualizado = [
        {
            id: Number(id),
            marca: dados.marca,
            modelo: dados.modelo,
            cor: dados.cor,
            valor: dados.valor
        }
    ]
    listaDeCarros[index] = carroatualizado
    return res.json({ mensagem: "carro atualizado com sucesso", listaDeCarros })

})

//atualiza uma carro
route.put("/carros/:id", (req, res) => {
    const id = req.params.id
    const dados = req.body
    if (!dados.marca || !dados.modelo || !dados.cor || !dados.valor) {
        return res.status(400).json({ mensagem: "campos marca,cor,e valor sao obrigatorios" })
    }
    const index = listaDeCarros.findIndex(carro => carro.id == id)
    return res.status(200).json({ mensagem: "carros criado com sucesso",carro })
})
// deletar carro

route.delete('/carro/:id', (req, res) => {
    const id = req.params.id
    const index = listaDeCarros.findIndex(carro => carro.id == id)
    if (index == -1) {


    }
})


//exporta o route
module.exports = route