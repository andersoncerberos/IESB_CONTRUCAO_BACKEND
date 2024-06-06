const express = require ('express')
const routes = require('./routes/routes')
const PORT = 3000
const app = express()


app.use(express.json())

app.use(routes)

const DBconnection = require('./database/conection')
DBconnection()


app.listen(PORT,()=>{
    console.log(`aplicação rodando na http://localhost:${PORT}`)
})