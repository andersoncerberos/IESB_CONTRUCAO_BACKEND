const Departamento = require("../models/departamento");

async function create(req, res) {
    const departamento = new Departamento (req.body)
    const departamentoCriado = await departamento.save()
    res.status(201).json(departamentoCriado)


}

async function getAll(req, res) {
    res.json(await Departamento.find())

}

async function getByid(req, res) {
    const departamento = await Departamento.findById(req.params.id)
    if (departamento) {
        res.json(departamento)
    } else {
        res.status(404).json({ mensagem: "departamento nao encontrado" })
    }
}

async function update(req, res) {

    const departamentoatualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (departamentoatualizadotualizado) {
        res.json(departamentoatualizado)
    } else {
        res.status(404).json({ mensagem: "departamento nao encontrado" })
    }
}

async function remove(req, res) {
    const departamentoexcluido = await Departamento.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "departamento excluido com sucesso!" })
    if (departamentoexcluidoexcluido) {
        res.json({ mensagem: "departamento excluido com sucesso", departamentoexcluidoexcluido })
    } else {
        res.status(404).json({ mensagem: "departamento nao encontrado" })
    }
}


module.exports = {
    create,
    getAll,
    getByid,
    update,
    remove
}
 
