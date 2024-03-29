const express = require('express')
// criando um router
const router = express.Router()

router.get("/subrota", (req,res) =>{
    res.send("sub-rota get")
})

router.post("/subrota", (req,res) =>{
    res.send("sub-rota post")
})
router.put("/subrota", (req,res) =>{
    res.send("sub-rota put")
})
router.delete("/subrota", (req,res) =>{
    res.send("sub-rota delete")
})

//exporta o  router
module.exports = router

//meste router e tbm um middiware
