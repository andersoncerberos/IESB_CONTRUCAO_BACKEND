const express =require('express')
const router = express.Router()

let tarefas = []
//recuperar tarefas
router.get("/tarefas",(req,res)=>{

    res.json(tarefas)
})
//recuperar tarefas peli id
router.get("/tarefas/:id",(req,res)=>{
    const id = req.params.id
    const tarefas = tarefas[id]
    res.json(tarefas)
    
})

//adicionar nova tarefa
router.post("/tarefas",(req,res)=>{
    const tarefas = req.body
    tarefas.push(tarefas)
    res,send('tarefa adicionada')

})

//Atualizar uma tarefa existente com base em seu identificador.
router.put("/tarefas/:id",(req,res)=>{
    const id = req.params.id
    const tarefas = req.body
    tarefas[id] = tarefas
    res.send('tarefas atualizada')
  
})
//Remover uma tarefa da lista com base em seu identificador.
router.delete("/tarefas/:id",(req,res)=>{
    const id = req.params.id
    const tarefas = tarefas[id]
    tarefas.splice(id,1)

})


module.exports = router