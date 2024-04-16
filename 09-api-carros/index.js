// importando o express
const express = require('express')
//cria  aplicação
const app = express()//criando ums instancia express

//middlewares intermediarios
//que traforma o corpo do requisito em JOSN
app.use(express.json())

//importar o modulo router
const carrosRouter = require('./routes/carros')
app.use(carrosRouter)







// criando a porta para aplicar  
app.listen(3000, ()=>{
    console.log("aplicação rodando na porta 3000")
})