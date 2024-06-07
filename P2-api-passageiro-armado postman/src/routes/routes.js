const express = require('express')
const router = express.Router()
//controller
const armascontroller = require('../controller/armascontroller')
const missaocontroller = require('../controller/missaocontroler')
const orgaocontroller = require('../controller/orgaocontroller')
const passageirocontroller = require('../controller/passageirocontroller')
const passagemaereacontroller = require('../controller/passagemaereacontrole')
//validaores
const {validarid} = require('../validators/validaid')
const { passageiroValidador } = require('../validators/passageirovalidador')
const { armasValidador } = require('../validators/armasvalidador')
const { orgaoValidador } = require('../validators/orgaovalidador')
const { missaoValidador } = require('../validators/missaovalidador')
const { passagemValidador } = require('../validators/passagemaereavalidador')
//passageiro
router.post('/passageiro',passageiroValidador,passageirocontroller.create)
router.get('/passageiro', passageirocontroller.getAll)
router.get('/passageiro/:id', validarid ,passageiroValidador, passageirocontroller.getByid)
router.put('/passageiro/:id',validarid,passageiroValidador,passageirocontroller.update)
router.delete('/passageiro/:id', validarid, passageirocontroller.remove)

// passagem
router.post('/passagem',passagemValidador,passagemaereacontroller.create)
router.get('/passagem', passagemaereacontroller.getAll)
router.get('/passagem/:id', validarid ,passagemValidador, passagemaereacontroller.getByid)
router.put('/passagem/:id',validarid,passagemValidador,passagemaereacontroller.update)
router.delete('/passagem/:id', validarid, passagemaereacontroller.remove)

//armas
router.post('/armas',armasValidador,armascontroller.create)
router.get('/armas', armascontroller.getAll)
router.get('/armas/:id', validarid,armasValidador , armascontroller.getByid)
router.put('/armas/:id',validarid,armasValidador,armascontroller.update)
router.delete('/armas/:id', validarid, armascontroller.remove)

//orgao
router.post('/orgao',orgaoValidador,orgaocontroller.create)
router.get('/orgao', orgaocontroller.getAll)
router.get('/orgao/:id', validarid,orgaoValidador , orgaocontroller.getByid)
router.put('/orgao/:id',validarid,orgaoValidador,orgaocontroller.update)
router.delete('/orgao/:id', validarid, orgaocontroller.remove)

//missao
router.post('/missao',missaoValidador,missaocontroller.create)
router.get('/missao', missaocontroller.getAll)
router.get('/missao/:id', validarid ,missaoValidador, missaocontroller.getByid)
router.put('/missao/:id',validarid,missaoValidador,missaocontroller.update)
router.delete('/missao/:id', validarid, missaocontroller.remove)


module.exports = router