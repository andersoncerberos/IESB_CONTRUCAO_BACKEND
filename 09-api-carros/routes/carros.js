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

    return res.status(201).json({
        mensagem: "Carro criado com sucesso!",
        carro
    })


})

//atualiza uma carro
route.put("/carros/:id", (req, res) => {
    const id = req.params.id
    const corpo = req.body

    if (!corpo.marca || !corpo.modelo || !corpo.cor || !corpo.valor) {
        return res.status(400).json({ mensagem: "Campos marca, modelo, cor e valor são obrigatórios" })
    }

    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrado!" })
    }

    const carroAtualizado = {
        id: Number(id),
        marca: corpo.marca,
        modelo: corpo.modelo,
        cor: corpo.cor,
        valor: corpo.valor
    }

    listaCarros[index] = carroAtualizado

    return res.json({
        mensagem: "Carro atualizado com sucesso!",
        carroAtualizado
    })
})
// deletar carro
route.delete('/carros/:id', (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrado!" })
    }
    listaCarros.splice(index, 1)
    res.json({ mensagem: `O Carro ${id} foi excluido com sucesso!` })
})

// Buscar o valor total de todos os carros por cor
route.get('/carros/cor/:cor/valor-total', (req, res) => {
    const cor = req.params.cor
    const carrosPorCor = listaCarros.filter(carro => carro.cor.toUpperCase() == cor.toUpperCase())

    let valorTotal = 0

    carrosPorCor.forEach(carro => {
        valorTotal = valorTotal + carro.valor
    })

    res.json({
        quantidadeCarros: carrosPorCor.length,
        valorTotal: valorTotal.toFixed(2)
    })
})


//exporta o route
module.exports = route