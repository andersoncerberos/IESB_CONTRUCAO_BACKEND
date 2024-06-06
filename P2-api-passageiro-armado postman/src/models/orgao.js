const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        }, regiao: {
            type: String,
            required: true
        }, responsavel: {
            type: String,
            required: true
        }, dataAltorizacao: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Orgao = mongoose.model('orgao', schema)

module.exports = Orgao