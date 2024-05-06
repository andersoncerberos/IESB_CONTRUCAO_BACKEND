const express = require('express')
const router = express.Router()

// lista pessoas
let listadepessoas = [
    {

        "nome": "anderson",
        "idade": 36,
        "email": "anderson@email.com",
        "telefone": "619938562"

    },
    {

        "nome": "carlos",
        "idade": 25,
        "email": "carlos@email.com",
        "telefone": "61986592347"

    },
    {

        "nome": "luana",
        "idade": 48,
        "email": "kuana@email.com",
        "telefone": "61978592342"

    }


]// Recuperar todas as pessoas
app.get('/pessoas', (req, res) => {
    res.json(pessoas);
});

// Recuperar uma pessoa específica por meio de seu identificador
app.get('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);
    if (pessoa) {
        res.json(pessoa);
    } else {
        res.status(404).send('Pessoa não encontrada.');
    }
});

// Adicionar uma nova pessoa
app.post('/pessoas', (req, res) => {
    const pessoa = req.body;
    pessoa.id = idAtual++;
    pessoas.push(pessoa);
    res.status(201).json(pessoa);
});

// Atualizar uma pessoa existente com base em seu identificador
app.put('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pessoas.findIndex(p => p.id === id);
    if (index !== -1) {
        pessoas[index] = req.body;
        pessoas[index].id = id;
        res.json(pessoas[index]);
    } else {
        res.status(404).send('Pessoa não encontrada.');
    }
});

// Remover uma pessoa da lista com base em seu identificador
app.delete('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pessoas.findIndex(p => p.id === id);
    if (index !== -1) {
        pessoas.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Pessoa não encontrada.');
    }
});


listadepessoas[index] = pessoasalterado

res.json({ mensagem: "pessoas alterada" })
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


module.exports = router