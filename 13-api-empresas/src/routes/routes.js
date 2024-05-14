const express = require('express')
const router = express.Router()

const cargocontroler = require('../controller/cargo-controler')

const {cargovalidador} = require('../validators/carrgovalidator')
const {validarid} = require('../validators/idvalidator')

router.post('/cargos', cargovalidador,cargocontroler.create)
router.get('/cargos', cargocontroler.getAll)
router.get('/cargos/:id', validarid , cargocontroler.getByid)
router.put('/cargos/:id',validarid,cargovalidador,  cargocontroler.update)
router.delete('/cargos/:id', validarid, cargocontroler.remove)



module.exports = router
