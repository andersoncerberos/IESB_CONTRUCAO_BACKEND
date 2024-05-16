const Cargo = require('../models/cargo')


//metodos 
async function create(req, res) {
    const cargo = new Cargo(req.body)
    const cargoCriado = await cargo.save()
    res.status(201).json(cargoCriado)


}

async function getAll(req, res) {
    res.json(await Cargo.find())

}

async function getByid(req, res) {
    const cargo = await Cargo.findById(req.params.id)
    if (cargo) {
        res.json(cargo)
    } else {
        res.status(404).json({ mensagem: "cargo nao encontrado" })
    }
}

async function update(req, res) {

    const cargoatualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (cargoatualizado) {
        res.json(cargoatualizado)
    } else {
        res.status(404).json({ mensagem: "cagor nao encontrado" })
    }
}

async function remove(req, res) {
    const cargoexcluido = await Cargo.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Cargo excluido com sucesso!" })
    if (cargoexcluido) {
        res.json({ mensagem: "cargo excluido com sucesso", cargoexcluido })
    } else {
        res.status(404).json({ mensagem: "cagor nao encontrado" })
    }
}


module.exports = {
    create,
    getAll,
    getByid,
    update,
    remove
}

