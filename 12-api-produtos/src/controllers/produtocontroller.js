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
async function getByid(req, res) {
    const produto = await Produto.findById(req.params.id)
    if (cargo) {
        res.json(produto)
    } else {
        res.status(404).json({ mensagem: "produto não encontrado" })
    }

}
async function remove(req, res) {
    const produtoexcluido = await Produto.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Produto excluido con sucesso" })
    if (produtoexcluido) {
        res.json({ mensagem: "produto excluido com sucesso", produtoexcluido })
    } else {
        res.status(404).json({ mensagem: "produto não encontrado" })
    }
}
async function update(req, res) {
    const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body)
    if (produtoAtualizado) {
        res.json({ mensagem: "produto atualizado com sucesso", produtoAtualizado })
    } else {
        res.status(404).json({ mensagem: "produto não encontrado" })
    }
}
// para casa
//getByid
//delete
//update

module.exports = {
    getAll,
    create,
    getByid,
    remove,
    update
}