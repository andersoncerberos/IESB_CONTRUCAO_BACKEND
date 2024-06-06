const Missao = require('../models/missao')


async function create(req, res) {
    // #swagger.tags = ['Missao']
    const { nome, DataInicio , DataTermino , QuantidadePessoas } = req.body
    const missoa = new Missao(req.body)
    const missaoCriada = await Missao.save()
    res.status(201).json(missaoCriada)


}

async function getAll(req, res) {
    // #swagger.tags = ['Missao']
    res.json(await Missao.find())

}

async function getByid(req, res) {
    // #swagger.tags = ['Missao']
    const missao = await Missao.findById(req.params.id)
    if (missao) {
        res.json(missao)
    } else {
        res.status(404).json({ mensagem: "missao não encontrada" })
    }
}

async function update(req, res) {
    // #swagger.tags = ['Missao']   
    const missaoatualizada = await Missao.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (missaoatualizada) {
        res.json(missaoatualizada)
    } else {
        res.status(404).json({ mensagem: "missao não encontrada" })
    }
}

async function remove(req, res) {
    // #swagger.tags = ['Missao']
    const missaoexcluida = await Missao.findByIdAndDelete(req.params.id)
    if (orgaoexcludo) {
        res.json({ mensagem: "missao excluida com sucesso", missaoexcluida })
    } else {
        res.status(404).json({ mensagem: "missao não encontrada" })
    }
}


module.exports = {
    create,//criar
    getAll,//busca por todos 
    getByid,//buscar po id
    update,//atualizar
    remove // delata
}
