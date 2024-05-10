const Cargo = require('../models/cargo')
const CargoModel = require('../models/cargo')

//metodos 
async function create(req, res) {
    try {
        const cargo = new Cargo(req.body)
        const cargoCriado = await cargo.save()
        res.status(201).json(cargoCriado)
    } catch (error) {
        console.log("erro ao criar cargo", error)
        res.status(400), json({
            mensagem: "erro de criar cargo",
            erro: error.mensagem
        })
    }

}


async function getAll(req, res) {
    res.json(await Cargo.find())

}

async function gatByid(req, res) {
    const cargo = await Cargo.findById(req.params.id)
    if (cargo) {
        res.json(cargo)
    } else {
        res.status(404).json({ mensagem: "cargo nao encontrado" })
    }
}

async function update(req, res) {
    try {
        const cargoatualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body)
        res.json(cargoatualizado)
    } catch (error) {
        console.error("erro ao criar cargo ", erro)
        res.status(400).json({
            mensagem: "erro ao atualiza o cargo",
            erro: error.mensagem
        })
    }
}

async function remove(req, res) {
    await Cargo.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Cargo excluido com sucesso!" })
}


module.exports = {
    create,
    getAll,
    gatByid,
    update,
    remove
}