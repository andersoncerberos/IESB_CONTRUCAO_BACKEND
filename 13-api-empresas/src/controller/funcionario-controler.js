const Funcionario = require('../models/funcionario')

async function create(req, res) {
    const funcionario = new Funcionario(req.body)
    const funcionarioCriado = await funcionario.save()
    res.status(201).json(funcionarioCriado)


}

async function getAll(req, res) {
    res.json(await Funcionario.find().populate('cargo','departamento'))

}

async function getByid(req, res) {
    const funcionario = await Funcionario.findById(req.params.id).populate('cargo', 'departamento')
    if (funcionario) {
        res.json(funcionario)
    } else {
        res.status(404).json({ mensagem: "funciinario nao encontrado" })
    }
}

async function update(req, res) {

    const funciinarioatualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (funciinarioatualizadotualizado) {
        res.json(funciinarioatualizadoatualizado)
    } else {
        res.status(404).json({ mensagem: "funcionario nao encontrado" })
    }
}

async function remove(req, res) {
    const funciinarioexcluido = await Funcionario.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "funcionario excluido com sucesso!" })
    if (funcionarioexcluido) {
        res.json({ mensagem: "funcionario excluido com sucesso", funcionarioexcluido })
    } else {
        res.status(404).json({ mensagem: "funcionario nao encontrado" })
    }
}


module.exports = {
    create,//criar
    getAll,//busca por todos 
    getByid,//buscar po id
    update,//atualizar
    remove // delata
}
