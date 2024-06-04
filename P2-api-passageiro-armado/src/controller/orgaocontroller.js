const Orgao = require('../models/orgao')

async function create(req, res) {
    // #swagger.tags = ['Orgao']

    const { nome , regiao, responsavel , dataAltorizacao } = req.body
    const orgao = new Orgao(req.body)
    const orgaoCriado = await Orgao.save()
    res.status(201).json(orgaoCriado)


}

async function getAll(req, res) {
    // #swagger.tags = ['Orgao']
    res.json(await Orgao.find())

}

async function getByid(req, res) {7
    // #swagger.tags = ['Orgao']
    const orgao = await Orgao.findById(req.params.id)
    if (orgao) {
        res.json(orgao)
    } else {
        res.status(404).json({ mensagem: "orgao não encontrado" })
    }
}

async function update(req, res) {
    // #swagger.tags = ['Orgao']    
    const orgaoatualizado = await Orgao.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (orgaoatualizado) {
        res.json(orgaoatualizado)
    } else {
        res.status(404).json({ mensagem: "orgao não encontrado" })
    }
}

async function remove(req, res) {
    // #swagger.tags = ['Orgao']
    const orgaoexcluido = await Orgao.findByIdAndDelete(req.params.id)
    if (orgaoexcluido) {
        res.json({ mensagem: "orgao excluido com sucesso", orgaoexcluido })
    } else {
        res.status(404).json({ mensagem: "orgao não encontrado" })
    }
}


module.exports = {
    create,//criar
    getAll,//busca por todos 
    getByid,//buscar po id
    update,//atualizar
    remove // delata
}
