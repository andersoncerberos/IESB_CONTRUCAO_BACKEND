const express = require('express')
const router = express.Router()
const produtocontrole = require('../controllers/produtocontroller')


router.get('/', (req,res)=>{
    res.json("ok")
})
// rotasde produtos
router.get('/produto', produtocontrole.getAll)
router.get('/produto', produtocontrole.create)






module.exports = router


