const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        companiaAerea: {
            type: String,
            required: true
        },destino:{
            type:String,
            required: true

        },
        dataPartida: {
            type: Date,
            required: true
        },
        dataChegada: {
            type: Date,
            required: false
        },
        numeroPasssagem: {
            type: Number,
            required: true
        },
        passageiro: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'passageiro',
            required: true
        },
    },
    {
        timestamps: true
    }
)

const PassagemAerea = mongoose.model('passagem', schema)

module.exports = PassagemAerea