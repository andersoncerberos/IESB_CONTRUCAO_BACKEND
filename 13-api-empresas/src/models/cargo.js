const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        }
    }, {
        decricao: {
            type: String,
            required: false,
    }
    }, 
    {   salario:{
            
            type: Number,
            require: true
            }
    },
    {
        timestamps: true
    }
)

const Cargo = mongoose.model('cargo', schema)

module.exports = Cargo