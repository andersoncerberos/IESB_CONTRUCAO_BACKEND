const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        decrição: {

            type: String,
            required: false
        },

        Datadeinicio: {

            type: Date,
            required: true
        },

        Datadefim: {

            type: Date,
            required: true
        }
    }

)

const Projeto = mongoose.model('projeto', schema)

module.exports = Projeto