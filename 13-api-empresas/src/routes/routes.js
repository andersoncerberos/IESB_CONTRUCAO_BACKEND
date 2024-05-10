const express = require('express')
const router = express.Router()

const cargocontroler = require('../controller/cargo-controler')


router.post('/cargos', cargocontroler.create)
router.get('/cargos', cargocontroler.getAll)
router.get('/cargos/:id', cargocontroler.getById)
router.put('/cargos/:id', cargocontroler.update)
router.delete('/cargos/:id', cargocontroler.remove)



module.exports = router
