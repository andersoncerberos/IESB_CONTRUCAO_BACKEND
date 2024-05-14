const Funcionario = require('../models/funcionario')

async function create(req, res) {
    try {
        const funcionario = new Funcionario(req.body)
        const funcionariocriado = await funcionario.sava()
        res.statuss(201).json(funcionariocriado)
    } catch (error) {

        console.error("erro ao cria funcionario", error)
        res.status(400).json(
            {
                mensagem: "erro ao cria funcionario",
                erro: error.mensagem
            }
        )

    }
}

async function gatByid(req,res){
    const funcionario = await Funcionario.findBid(req.params.id).populate('cargo')
}






module.exports = {
    create,
    getAll,
    getByid,
    update,
    remove
}