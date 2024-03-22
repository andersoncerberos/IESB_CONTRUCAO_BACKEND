const express = require('express')
const app = express();
const port = 3000;

app.use((req,res,next) => {
    console.log("passou o intermediario")
    console.log("data" + Date.now())
    next();
})

app.use(express.json())

app.get('/', (req,res)=>{
    res.send("hello word");
})

app.post('/aluno',(req,res)=>{
    console.log(req.body);
    res.send("ok");
})

app.listen(port,() => {
    console.log("aplicação inicianda")

})