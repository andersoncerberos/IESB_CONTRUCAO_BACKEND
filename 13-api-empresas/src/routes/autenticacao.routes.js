const express = require('express')
const router = express.Router()

const autentecacaocontroller = require('../controller/autenticacaocontroller')

const {usuariovalidador, loginvalidador} = require ('../validators/autenticacaovalidadador')

router.post('/auth/registor',usuariovalidador, autentecacaocontroller.login)

router.post('/auth/login',loginvalidador,autentecacaocontroller.login)



module.exports = router