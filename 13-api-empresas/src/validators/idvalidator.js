const mongoose = require('mongoose')



function validarid(re, res, next) {
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if (isValid) {
        next()
    } else {
        res.status(400).json({ mensagem: "id invalido" })
    }

}

module.exports = {
    validarid
}