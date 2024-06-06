const Passageiro = require('../models/passageiro')

async function create(req, res) {
   
    const { nome , cpf , email, telefone, endereco, genero } = req.body
    const passageiro = new Passageiro(req.body)
    const passageiroCriado = await passageiro.save()
    res.status(201).json({ mensagem: "passageiro criado com sucesso", passageiroCriado })


}

async function getAll(req, res) {
    
    res.json(await Passageiro.find().populate('armas', 'orgao', 'passagem-aerea', 'missao'))

}

async function getByid(req, res) {
    
    const passageiro = await Passageiro.findById(req.params.id).populate('armas', 'orgao', 'passagem-aerea', 'missao')
    if (passagerio) {
        res.json(passageiro)
    } else {
        res.status(404).json({ mensagem: "passageiro não encontrado" })
    }
}

async function update(req, res) {
    
    const passageiroatualizado = await Passageiro.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (passageiroatualizado) {
        res.json(passageiroatualizado)
    } else {
        res.status(404).json({ mensagem: "passageiro não encontrado" })
    }
}

async function remove(req, res) {
    
    const passageiroexcluido = await Funcionario.findByIdAndDelete(req.params.id)
    if (passageiroexcluido) {
        res.json({ mensagem: "passageiro excluido com sucesso", passageiroexcluido })
    } else {
        res.status(404).json({ mensagem: "passageiro não encontrado" })
    }
}


module.exports = {
    create,//criar
    getAll,//busca por todos 
    getByid,//buscar po id
    update,//atualizar
    remove // delata
}
