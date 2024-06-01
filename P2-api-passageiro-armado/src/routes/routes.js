const express = require('express')
const router = express.Router()

const armascontroller = require('../controller/armascontroller')
const missaocontroller = require('../controller/missaocontroler')
const orgaocontroller = require('../controller/orgaocontroller')
const passageirocontroller = require('../controller/passageirocontroller')
const passagemaereacontroller = require('../controller/passagemaereacontrole')

const {validarid} = require('../validators/validaid')

//passageiro
router.post('/passageiro',passageirocontroller.create)
router.get('/passageiro', passageirocontroller.getAll)
router.get('/passageiro/:id', validarid , passageirocontroller.getByid)
router.put('/passageiro/:id',validarid,passageirocontroller.update)
router.delete('/passageiro/:id', validarid, passageirocontroller.remove)

// passagem
router.post('/passagem',passagemaereacontroller.create)
router.get('/passagem', passagemaereacontroller.getAll)
router.get('/passagem/:id', validarid , passagemaereacontroller.getByid)
router.put('/passagem/:id',validarid,passagemaereacontroller.update)
router.delete('/passagem/:id', validarid, passagemaereacontroller.remove)

//armas
router.post('/armas',armascontroller.create)
router.get('/armas', armascontroller.getAll)
router.get('/armas/:id', validarid , armascontroller.getByid)
router.put('/armas/:id',validarid,armascontroller.update)
router.delete('/armas/:id', validarid, armascontroller.remove)

//orgao
router.post('/orgao',orgaocontroller.create)
router.get('/orgao', orgaocontroller.getAll)
router.get('/orgao/:id', validarid , orgaocontroller.getByid)
router.put('/orgao/:id',validarid,orgaocontroller.update)
router.delete('/orgao/:id', validarid, orgaocontroller.remove)

//missao
router.post('/missao',missaocontroller.create)
router.get('/missao', missaocontroller.getAll)
router.get('/missao/:id', validarid , missaocontroller.getByid)
router.put('/missao/:id',validarid,missaocontroller.update)
router.delete('/missao/:id', validarid, missaocontroller.remove)








module.exports = router