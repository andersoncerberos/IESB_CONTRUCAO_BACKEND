const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        numeracao: {
            type: String,
            required: true
        },
        quantidade: {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true
    }
)

const Armas = mongoose.model('arma', schema)

module.exports = Armas