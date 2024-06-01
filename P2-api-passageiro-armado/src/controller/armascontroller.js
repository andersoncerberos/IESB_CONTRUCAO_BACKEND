const Armas = require('../models/armas')



async function create(req, res) {
    // #swagger.tags = ['armas']
    const { nome , tipo , numeracao } = req.body
    const armas = new Armas(req.body)
    const armasCriada = await Armas.save()
    res.status(201).json(armasCriada)


}

async function getAll(req, res) {
    // #swagger.tags = ['armas']
    res.json(await Armas.find())

}

async function getByid(req, res) {
    // #swagger.tags = ['armas']
    const armas = await Armas.findById(req.params.id)
    if (armas) {
        res.json(Armas)
    } else {
        res.status(404).json({ mensagem: "arma  não encontrada" })
    }
}

async function update(req, res) {
    // #swagger.tags = ['armas']    
    const armasatualizadas = await Armas.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (armasatualizadas) {
        res.json(armasatualizadas)
    } else {
        res.status(404).json({ mensagem: "arma não encontrada" })
    }
}

async function remove(req, res) {
    // #swagger.tags = ['armas']
    const armasexcluida = await Armas.findByIdAndDelete(req.params.id)
    if (armasexcluida) {
        res.json({ mensagem: "arma excluida com sucesso", armasexcluida })
    } else {
        res.status(404).json({ mensagem: "arma não encontrada" })
    }
}


module.exports = {
    create,//criar
    getAll,//busca por todos 
    getByid,//buscar po id
    update,//atualizar
    remove // delata
}
