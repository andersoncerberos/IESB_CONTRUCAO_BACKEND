const Missao = require('../models/missao')


async function create(req, res) {
    
    const missoa = new Missao(req.body)
    const missaoCriada = await Missao.save()
    res.status(201).json(missaoCriada)


}

async function getAll(req, res) {
    
    res.json(await Missao.find())

}

async function getByid(req, res) {
   
    const missao = await Missao.findById(req.params.id)
    if (missao) {
        res.json(missao)
    } else {
        res.status(404).json({ mensagem: "missao não encontrada" })
    }
}

async function update(req, res) {
     
    const missaoatualizada = await Missao.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (missaoatualizada) {
        res.json(missaoatualizada)
    } else {
        res.status(404).json({ mensagem: "missao não encontrada" })
    }
}

async function remove(req, res) {
   
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
