const PassagemAerea = require('../models/passagem-aerea')

async function create(req, res) {
    // #swagger.tags = ['passagem-aerea']

    const { companiaAerea, destino , dataPatrtida , dataChegada , numeroPassagem } = req.body

    const passagem = new Passagem(req.body)
    const passagemCriada = await passagem.save()
    res.status(201).json(passagemCriada)


}

async function getAll(req, res) {
    // #swagger.tags = ['passagem-aerea']
    res.json(await PassagemAerea.find().populate('passageiro'))

}

async function getByid(req, res) {
    // #swagger.tags = ['passagem-aerea']
    const passagem = await PassagemAerea.findById(req.params.id).populate('passageiro')
    if (passagem) {
        res.json(passagem)
    } else {
        res.status(404).json({ mensagem: "passagemnão encontrada" })
    }
}

async function update(req, res) {
    // #swagger.tags = ['passagem-aerea']

    const passagematualizada = await PassagemAerea.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (passagematualizada) {
        res.json(passagematualizada)
    } else {
        res.status(404).json({ mensagem: "passagem não encontrada" })
    }
}

async function remove(req, res) {
    // #swagger.tags = ['passagem-aerea']
    const passagemexcluida = await PassagemAerea.findByIdAndDelete(req.params.id)
    if (passagemexcluida) {
        res.json({ mensagem: "passagem excluida com sucesso", passagemexcluida })
    } else {
        res.status(404).json({ mensagem: "passagem não encontrada" })
    }
}


module.exports = {
    create,//criar
    getAll,//busca por todos 
    getByid,//buscar po id
    update,//atualizar
    remove // delata
}
