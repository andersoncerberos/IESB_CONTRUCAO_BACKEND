const express = require('express')
const router = express.Router()

const autenticacaoValidadador= require('../validators/autenticacaoValidadador')

const {usuariovalidador} = require('../validators/autenticacaoValidadador')

router.post('/auth/registor',autenticacaoValidadador,autenticacaocontroller)

router.post('/auth/registor',loginvalidador, autenticacaocontroller.login)



module.exports = {

}