const express = require ("express")
const DBconection = require('./DB/conection')


const app = express()
const PORT = 3000;

app.use(express.json())





app.listen(PORT,()=>{
    DBconection()
    console.log(`aplicação rodado na porta ${PORT}`)
})