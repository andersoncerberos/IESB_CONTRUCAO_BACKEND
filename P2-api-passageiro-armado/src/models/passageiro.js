const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
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
            type: String,
            required: true
        },
        genero: {
            type: String,
            required: true
        },
        armas: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'armas',
            required: true
        },
        orgao: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'departamento',
            required: true
        },
        passagemAerea: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'passagem-aerea',
            required: true
        },
        missao: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'missao',
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Passageiro = mongoose.model('passageiro', schema)

module.exports = Passageiro