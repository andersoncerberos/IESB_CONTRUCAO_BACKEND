const serve = require('http')

let contador = 0

serve.createServer(( req , res ) => { 

    contador++
    console.log("contaodr de requisições" + contador )

    res.write("bem vindo ao meu beckand contador de requisicao" + contador)
    res.end()

}).listen(3000)