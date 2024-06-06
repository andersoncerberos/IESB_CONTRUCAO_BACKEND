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
            type: Number,
            required: true
        }, quantidade: {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true
    }
)

const Armas = mongoose.model('armas', schema)

module.exports = Armas