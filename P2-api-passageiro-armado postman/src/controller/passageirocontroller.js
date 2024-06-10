const Passageiro = require('../models/passageiro')



async function create(req, res) {
      const passageiro = new Passageiro(req.body)

        const passageiroCriado = await passageiro.save()
        res.status(201).json(passageiroCriado)
    
       
        res.status(400).json({
            mensagem: 'Erro ao criar passageiro!',
            erro: error.messager
        })
    
}

async function getAll(req, res) {
    
    res.json(await Passageiro.find().populate(['arma', 'orgao']))

}

async function getByid(req, res) {
    
    const passageiro = await Passageiro.findById(req.params.id).populate(['arma', 'orgao'])
    if (passageiro) {
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
