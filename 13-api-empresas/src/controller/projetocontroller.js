const Projeto = require('../models/projeto')

//metodos 
async function create(req, res) {
    const projeto = new Projeto(req.body)
    const projetoCriado = await projeto.save()
    res.status(201).json(projetoCriado)


}

async function getAll(req, res) {
    res.json(await Projeto.find())

}

async function getByid(req, res) {
    const projeto = await Projeto.findById(req.params.id)
    if (projeto) {
        res.json(projeto)
    } else {
        res.status(404).json({ mensagem: "projeto nao encontrado" })
    }
}

async function update(req, res) {

    const projetoatualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (projetoatualizado) {
        res.json(projetoatualizado)
    } else {
        res.status(404).json({ mensagem: "projeto nao encontrado" })
    }
}

async function remove(req, res) {
    const projetoexcluido = await Projeto.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "projeto excluido com sucesso!" })
    if (projetoexcluido) {
        res.json({ mensagem: "projeto excluido com sucesso", projetoexcluido })
    } else {
        res.status(404).json({ mensagem: "projeto nao encontrado" })
    }
}


module.exports = {
    create,//criar
    getAll,//busca por todos 
    getByid,//buscar po id
    update,//atualizar
    remove // delata
}

