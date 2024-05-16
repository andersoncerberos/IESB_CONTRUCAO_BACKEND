const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        }
    },
    {
        decrição: {

            type: String,
            required: false
        }
    }

)

const Departamento = mongoose.model('departamento', schema)

module.exports = Departamento