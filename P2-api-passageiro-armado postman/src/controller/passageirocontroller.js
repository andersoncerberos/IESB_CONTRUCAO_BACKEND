const Passageiro = require('../models/passageiro')
const { cpf } = require('cpf-cnpj-validator'); // Validador de CPF
const { parsePhoneNumberFromString } = require('libphonenumber-js'); // Validador de telefone


async function create(req, res) {
    try {
        const passageiro = new Passageiro(req.body)
        // Valide o telefone
        const telefoneValido = validatePhoneNumber(passageiro.telefone, 'BR');
        if (!telefoneValido.isValid) {
            return res.status(400).json("Telefone é inválido");
        }
        // Valide o CPF
        if (!cpf.isValid(passageiro.cpf)) {
            return res.status(400).json("CPF é inválido!");
        }

        const passageiroCriado = await passageiro.save()
        res.status(201).json(passageiroCriado)
    } catch (error) {
        console.error('Erro ao criar: ', error)
        res.status(400).json({
            mensagem: 'Erro ao criar passageiro!',
            erro: error.messager
        })
    }
}

async function getAll(req, res) {
    
    res.json(await Passageiro.find().populate(['armas', 'orgao']))

}

async function getByid(req, res) {
    
    const passageiro = await Passageiro.findById(req.params.id).populate(['armas', 'orgao'])
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
