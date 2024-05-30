require('dotenv').config()
const Usuario = require('../models/usuario')
const usuario = require('../models/usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

async function registrar(req, res,) {
     // #swagger.tags = ['registro']
    const { nome, email, senha } = req.body

    const usuarioexiste = await usuario.findOne({ email })
    if (usuarioexiste) {
        return res.status(400).json({ mensagem: 'ususario ja existi' })
    }

    const hash = await bcrypt.hash(senha, 10)

    const usuario = new Usuario({
        nome,
        email,
        senha: hash
    })

    await usuario.save()

    res.status(201).json({ mensagem: 'usuario cadastrado com sucesso' })
}

async function login(req, res) {
     // #swagger.tags = ['login']
    const { email, senha } = req.body

    const usuario = await Usuario.findOne({ email })

    if (!usuario) {
        res.status(401).json({ mensagem: 'usuario nao cadastrado' })
    }

    const senhavalida = await bcrypt.compare(senha, usuario.senha)

    if (!senhavalida) {
        res.status(401).json({ menasgem: 'usuario ou senha invalidos' })
    }

    const tolken = jwt.sign({ email: usuario.email }, JWT_SECRET, { expiresIn: '10m' })

    res.json({ mensagem: 'login efetuado com sucesso' }, tolken)

}



module.exports = {
    registrar,
    login
}