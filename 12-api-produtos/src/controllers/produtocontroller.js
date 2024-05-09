const Produto = require("../models/produto")

//buscar de produto
async function getAll(req, res) {
    const produto = await Produto.find()
    res.json(produto)
}

//criar produtos
async function create(req, res) {
    try {
        const produto = new Produto(req.body)
        const produtocriado = await produto.save()
        res.status(201).json(produtocriado)
    } catch {
        console.log(error)
        res.status(500).json(
            {
                mensagem: "ocorreu um erro ao cadastra produto",
                    erro: error
            }
        )
    }
}
// para casa
//getByid
//delete
//update

module.exports = {
    getAll,
    create
}