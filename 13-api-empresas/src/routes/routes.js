const express = require('express')
const router = express.Router()

const cargocontroler = require('../controller/cargo-controler')
const departamentocontroler = require('../controller/departamentocontroller')

const {cargovalidador} = require('../validators/carrgovalidator')
const {validarid} = require('../validators/idvalidator')
const {Departamentovalidador} = require('../validators/departamentovalidator')


router.post('/cargos', cargovalidador,cargocontroler.create)
router.get('/cargos', cargocontroler.getAll)
router.get('/cargos/:id', validarid , cargocontroler.getByid)
router.put('/cargos/:id',validarid,cargovalidador,  cargocontroler.update)
router.delete('/cargos/:id', validarid, cargocontroler.remove)

router.post('/departamento', Departamentovalidador,departamentocontroler.create)
router.get('/departamento', departamentocontroler.getAll)
router.get('/departamento/:id',Departamentovalidador,departamentocontroler.getByid)
router.put('/cargos/:id',validarid,Departamentovalidador,departamentocontroler.update)
router.delete('/cargos/:id', validarid, departamentocontroler.remove)


module.exports = router
