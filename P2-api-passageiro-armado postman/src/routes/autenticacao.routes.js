const express = require('express')
const router = express.Router()

const AutenticacaoController = require('../controller/atenticacaocontroller')

const { usuarioValidador, loginValidador } = require('../validators/autenticacaovalidator')


router.post('/auth/registro', usuarioValidador, AutenticacaoController.registrar)

router.post('/auth/login', loginValidador, AutenticacaoController.login)


module.exports = router