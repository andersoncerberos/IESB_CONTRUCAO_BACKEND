const express = require ('express')
const routes = require('./routes/routes')
const swaggerUI = require('swagger-ui-express')
const PORT = 3000
const app = express()


app.use(express.json())
app.use(routes)

const DBconnection = require('./database/conection')
DBconnection()


const swaggerfile = require('./swagger.json')
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerfile))


app.listen(PORT,()=>{
    console.log(`aplicação rodando na http://localhost:${PORT}`)
})