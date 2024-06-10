const yup = require('yup')

const orgaoSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    regiao: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    diretor: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    departamento: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
})

function orgaoValidador(req, res, next) {
    orgaoSchema
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
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

module.exports = {
    orgaoValidador
}