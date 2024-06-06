const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        DataInicio: {
            type: Date,
            required: true
        },
        DataTermino: {
            type: Date,
            required: true
        },
        QuantidadePessoas: {
            type: Number,
            required: false
        },
        passageiro: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'passageiro',
            required: false
        }

    },
    {
        timestamps: true
    }
)

const Missao = mongoose.model('missao', schema)

module.exports = Missao