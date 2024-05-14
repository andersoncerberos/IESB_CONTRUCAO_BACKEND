const yup = require('yup')


const cargoschema = yup.object().shape({
    nome: yup
        .string('campo precias ser um texto')
        .required('campo obrigatorio'),
    descricao: yup
        .string(),
    salario: yup
        .number('campo precisa ser um numero')
        .min(1414, 'precisa ser maio que o salario minimo')
        .required('campo obrigatorio')
})

function cargovalidador(req, res, next) {
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
                mensagem:"falha na validação doscampos",
                erros: errors
            })
        })
}

module.exports = {
    cargovalidador
}