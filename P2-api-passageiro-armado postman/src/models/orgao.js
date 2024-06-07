const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        regiao: {
            type: String,
            required: true
        }, 
        diretor: {
            type: String,
            required: true
        }, 
        departamento: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Orgao = mongoose.model('orgao', schema)

module.exports = Orgao