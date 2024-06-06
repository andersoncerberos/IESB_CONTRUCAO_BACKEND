const PassagemAerea = require('../models/passagem-aerea')

async function create(req, res) {

    const passagem = new PassagemAerea(req.body)
    const passagemCriada = await passagem.save()
    res.status(201).json(passagemCriada)


}

async function getAll(req, res) {
    
    res.json(await PassagemAerea.find().populate('passageiro'))

}

async function getByid(req, res) {
    
    const passagem = await PassagemAerea.findById(req.params.id).populate('passageiro')
    if (passagem) {
        res.json(passagem)
    } else {
        res.status(404).json({ mensagem: "passagemnão encontrada" })
    }
}

async function update(req, res) {

    const passagematualizada = await PassagemAerea.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (passagematualizada) {
        res.json(passagematualizada)
    } else {
        res.status(404).json({ mensagem: "passagem não encontrada" })
    }
}

async function remove(req, res) {
    
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
