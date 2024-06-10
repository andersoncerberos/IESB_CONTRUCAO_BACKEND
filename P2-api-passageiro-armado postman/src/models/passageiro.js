const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        datanascimento: {
            type: Date,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true
        },
        telefone: {
            type: String,
            required: true
        },
        endereco: {
            cep: String,
            uf: String,
            logradouro: String,
            localidade: String,
            bairro: String,
            numero: String,
            complemento: String
        },
        genero: {
            type: String,
            required: true
        },
        armas: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'arma',
            required: false

        },
        orgao: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'orgao',
            required: true
        },
        missao: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'missao',
            required: true
        },

    },
    {
        timestamps: true
    }
)

const Passageiro = mongoose.model('passageiro', schema)

module.exports = Passageiro