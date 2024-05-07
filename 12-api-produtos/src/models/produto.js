const mongoose = require('mogoose')

const schema = mongoose.schema({
    nome: {
        type: String,
        required: true
    }, preco:
    {
        type: Number,
        required: true
    }, tipo:
    {
        type: String,
        required: true
    }, tag:
    {
        type: String,
        required: false
    }
})

const Produto = mongoose.model('produto', schema)

module.exports = Produto