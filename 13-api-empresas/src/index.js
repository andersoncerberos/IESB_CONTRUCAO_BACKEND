const express = require ('express')
const PORT = 3000
const app = express()
const swaggerui = require('swagger-ui-express')

app.use(express.json())

const DBconnection = require('./DB/conection')
DBconnection()

const swaggerfile = require('./swagger.json')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const { checarToken } = require('./validators/autenticacaoValidadador')

const routes = require('./routes/routes')
app.use("/", checarToken, routes)



app.listen(PORT,()=>{
    console.log(`aplicação rodando na PORTA ${PORT}`)
})