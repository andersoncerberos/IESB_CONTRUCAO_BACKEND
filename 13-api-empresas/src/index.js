const express = require ('express')
const PORT = 3000
const app = express()

app.use(express.json())

const DBconnection = require('./DB/conection')
DBconnection()

const router = require('./routes/routes')
app.use(router)

app.listen(PORT,()=>{
    console.log(`aplicação rodando na ${PORT}`)
})