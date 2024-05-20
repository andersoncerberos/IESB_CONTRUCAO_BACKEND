const Projeto = require('../models/tarefa')

//metodos 
async function create(req, res) {
    const tarefa = new Tarefa(req.body)
    const tarefacriada = await tarefa.save()
    res.status(201).json(tarefacriada)


}

async function getAll(req, res) {
    res.json(await Projeto.find())

}

async function getByid(req, res) {
    const tarefa = await Tarefa.findById(req.params.id)
    if (tarefa) {
        res.json(tarefa)
    } else {
        res.status(404).json({ mensagem: "tarefa nao encontrado" })
    }
}

async function update(req, res) {

    const tarefaatualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (projetoatualizado) {
        res.json(tarefaatualizada)
    } else {
        res.status(404).json({ mensagem: "tarefa nao encontrado" })
    }
}

async function remove(req, res) {
    const tarefaexcluida = await Tarefa.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "tarefa excluido com sucesso!" })
    if (tarefaexcluida) {
        res.json({ mensagem: "tarefa excluido com sucesso", tarefaexcluida })
    } else {
        res.status(404).json({ mensagem: "tarefa nao encontrado" })
    }
}


module.exports = {
    create,//criar
    getAll,//busca por todos 
    getByid,//buscar po id
    update,//atualizar
    remove // delata
}

