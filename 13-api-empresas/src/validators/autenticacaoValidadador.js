const yup = require('yup')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const usuarioschema = yup.object().shape({
    nome: yup
        .string('campo precias ser um texto')
        .required('campo obrigatorio'),
    email: yup
        .string('campo precias ser um texto')
        .email('email invalido')
        .required('campo obrigario'),
    senha: yup
        .string('campo precias ser um texto')
        .required('campo obrigatorio'),
})
const loginschema = yup.object().shape({

    email: yup
        .string('campo precias ser um texto')
        .email('email invalido')
        .required('campo obrigario'),
    senha: yup
        .string('campo precias ser um texto')
        .required('campo obrigatorio'),
})

function usuariovalidador(req, res, next) {
    cargoschema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json({
                mensagem: "falha na validação doscampos",
                erros: errors
            })
        })
    }
    function loginvalidador(req, res, next) {
        cargoschema
            .validate(req.body, { abortEarly: false })
            .then(() => next())
            .catch(err => {
                const errors = err.inner.map(e => {
                    const erro = {
                        campo: e.path,
                        erros: e.errors
                    }
                    return erro
                })
                res.status(400).json({
                    mensagem: "falha na validação doscampos",
                    erros: errors
                })
            })
    }
    async function checarToken(req, res, next) {
        try {
            const authorizationHeader = req.get('Authorization')
            const separator = authorizationHeader.split(' ')
            const token = separator[1]

            jwt.verify(token, JWT_SECRET)
            next()
        } catch (error) {
            return res.status(401).json({ mensagem: "token inválido" })
        }

    }
    module.exports = {
        usuariovalidador,
        loginvalidador,
        checarToken
    }