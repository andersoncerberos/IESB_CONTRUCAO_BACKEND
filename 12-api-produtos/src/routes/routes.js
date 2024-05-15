const express = require('express')
const router = express.Router()
const produtocontrole = require('../controllers/produtocontroller')



// rotasde produtos
router.get('/produto', produtocontrole.getAll)
router.get('/produto', produtocontrole.create)
router.delete('/produto/:id', produtocontrole.remove)
router.get('/produto/:id', produtocontrole.update)
router.get('/produto/:id', produtocontrole.getByid)






module.exports = router


