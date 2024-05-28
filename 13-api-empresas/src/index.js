const express = require ('express')
const PORT = 3000
const app = express()
const swaggerui = require('swagger-ui-express')

app.use(express.json())

const DBconnection = require('./DB/conection')
DBconnection()
const swaggerfile = require('./swagger.json')

const router = require('./routes/routes')
app.use(router)

app.listen(PORT,()=>{
    console.log(`aplicação rodando na PORTA ${PORT}`)
})