const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        titulo: {
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
        },

        funcionario: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'funcionario',
            required: true
        },
        projeto: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cargo',
            required: true
        }
    }

)

const Tarefa = mongoose.model('tarefa', schema)

module.exports = Tarefa