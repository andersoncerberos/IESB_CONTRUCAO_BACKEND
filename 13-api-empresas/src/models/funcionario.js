const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            uniqui: true
        },
        datadenascimento: {
            type: Date,
            required: true
        }, cargo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cargo',
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Cargo = mongoose.model('funcionario', schema)

module.exports = funcionario