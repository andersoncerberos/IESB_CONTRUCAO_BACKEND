//importa o express
const express = require('express')

//criar o router
const router = express.Router()

//criar array para livros
const ListaLivros = [
    {
        id: 1,
        titulo: "senhor dos aneis",
        autor: "tolkin",
        ano: "1954",
        editora: "editora dos aneis",
        preco: 19.99
    },
    {
        titulo: "as cronicas de narnia ",
        autor: "bernad ",
        ano: "1970",
        editora: "extrema",
        preco: 30.00
    },
    {
        id: 3,
        titulo: "o medico jesus",
        autor: "bruno de paula",
        ano: "2020",
        editora: "atica",
        preco: 19.99
    }
]
//read - buscar livros
router.get('/livros', (req, res) => {
    res.json(ListaLivros)
})


//create - cadastrar livros
router.post('/livros', (req, res) => {
    const livros = req.body
    if (!livros.titulo || !livros.autor || !livros.ano || !livros.editora || !livros.preco) {
        res.status(400).json({ mensagem: "os dados devem ser preenchidos corretamente" })
    }
    const NovoLivro = [
        {
            id: Math.round(Math.random() * 1000),
            titulo: livros.titulo,
            autor: livros.autor,
            ano: livros.ano,
            editora: livros.editora,
            preco: livros.preco
        }
    ]
    ListaLivros.push(NovoLivro)
    res.status(201).json({ mensagem: "livro cadastrado com sucesso" }, NovoLivro)
})

//update - atulizar livros
router.put('/livros/:id', (req, res) => {
    const id = req.params.id
    const novosdados = req.body

    if (!novosdados.titulo || !novosdados.autor || !novosdados.ano || !novosdados.editora || !novosdados.preco) {
        res.status(400).json({ mensagem: "preeencha os dados corretamennte" })
    }
    const index = ListaLivros.findIndex(livros => livros.id == id)
    if (index == -1) {
        res.status(404).json({ mensagem: "livro nao encontrado" })
    }
    const novolivros = [
        {
            id: Number(id),
            titulo: novosdados.titulo,
            autor: novosdados.autor,
            ano: novosdados.ano,
            editora: novosdados.editora,
            preco: novosdados.preco
        }]

        ListaLivros[index] = livros

        res.status(200).json({mensagem:"livro atualizado"}, novolivros)

})
//delete - excluir livros
router.delete('/livros/:id', (req, res )=>{
    const id = req.params.id
    const index = ListaLivros.findIndex(livros => livros.id == id)
    if(index == -1){
        res.status(404).json({mensegem:"livro nao encontrado"})
    }
    ListaLivros.splice(inex,-1)
    res.status(200).json({mensagem:"livro excluido"})
})

//busca de todos os livros do mesmo autor
router.get("/livros/autor/:autor",(req,res)=>{
    const autor = req.params.autor
    const livros = ListaLivros.filter(livros => livros.autor == autor)
    res.json(livros)
})

//calcular e retornar o preço médio de todos os livros da lista
router.get("/livros/preco/:media",(req,res)=>{
    const soma = req.params.soma
    const livros = ListaLivros.reduce((soma,livros)=>soma+livros.preco)
    res.json(livros)
 
})









//exporta o router
module.exports = router 