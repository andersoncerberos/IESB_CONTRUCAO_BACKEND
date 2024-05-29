const express = require('express')
const router = express.Router()

const cargocontroler = require('../controller/cargo-controler')
const departamentocontroler = require('../controller/departamentocontroller')
const FuncionarioController = require('../controller/funcionario-controler')
const projetocontroller = require('../controller/projetocontroller')
const tarefacontrole = require('../controller/tarefacontroller')

const {cargovalidador} = require('../validators/carrgovalidator')
const {validarid} = require('../validators/idvalidator')
const {Departamentovalidador} = require('../validators/departamentovalidator')
const {funcionariovalidador} = require('../validators/funcionariovalidador')
const {projetovalidador} = require('../validators/projetovalidador')
const{tarefavalidador} = require('../validators/tarefavalidado')

router.post('/cargos', cargovalidador,cargocontroler.create)
router.get('/cargos', cargocontroler.getAll)
router.get('/cargos/:id', validarid , cargocontroler.getByid)
router.put('/cargos/:id',validarid,cargovalidador,  cargocontroler.update)
router.delete('/cargos/:id', validarid, cargocontroler.remove)

router.post('/departamento', Departamentovalidador,departamentocontroler.create)
router.get('/departamento', departamentocontroler.getAll)
router.get('/departamento/:id',Departamentovalidador,departamentocontroler.getByid)
router.put('/departamento/:id',validarid,Departamentovalidador,departamentocontroler.update)
router.delete('/departamento/:id', validarid, departamentocontroler.remove)

router.post('/funcionarios',funcionariovalidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id',validarid,funcionariovalidador,FuncionarioController.getByid)
router.put('/funcionarios/:id',validarid,funcionariovalidador,FuncionarioController.update)
router.delete('/funcionarios/:id',validarid,FuncionarioController.remove)

router.post('/projetos',projetovalidador, projetocontroller.create)
router.get('/projetos', projetocontroller.getAll)
router.get('/projetos/:id', validarid,projetovalidador,projetocontroller.getByid)
router.put('/projetos/:id',validarid,projetovalidador, projetocontroller.update)
router.delete('/projetos/:id', validarid,projetocontroller.remove)

router.post('/tarefas',tarefavalidador, tarefacontrole.create)
router.get('/tarefas', tarefacontrole.getAll)
router.get('/tarefas/:id', validarid,tarefavalidador,tarefacontrole.getByid)
router.put('/tarefas/:id',validarid,tarefavalidador, tarefacontrole.update)
router.delete('/tarefas/:id', validarid,tarefacontrole.remove)

module.exports = router
