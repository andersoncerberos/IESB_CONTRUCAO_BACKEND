const express = require('express')
const app = express()
app.use(express.json())

//path param
app.get('/execicio1/:qtdminima/:qtdmaxima', (req,res) => {
     const quantminima = Number(req.params.qtdminima)
     const quantmaxima = Number(req.params.qtdmaxima)

     const estomedio = (quantmaxima + quantminima)/2
    res.send(`estoque  medio ${estomedio}`)
})
//query params
app.get('/execicio1/:qtdminima/:qtdmaxima', (req,res) => {
    const quantminima = Number(req.query.qtdminima)
    const quantmaxima = Number(req.query.qtdmaxima)

    const estomedio = (quantmaxima + quantminima)/2
   res.send(`estoque  medio ${estomedio}`)
})


//body
app.post('/execicio2',(req,res)=>{
    const quantmaxima = req.body.qtdminima
    const quantminima = req.body.qtdmaxima
    const estomedio = (quantmaxima + quantmaxima)/ 2

    res.send(`estoque medio ${estomedio}`)
})

app.listen(3000,() => {
    console.log("aplicação iniciada em http:localhost:3000")
})