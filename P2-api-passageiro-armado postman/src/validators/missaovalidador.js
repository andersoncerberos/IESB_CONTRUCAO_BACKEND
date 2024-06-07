const yup = require('yup')

const missaoSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    DataInicio: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    DataInicio: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    DataTermino: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    QuantidadePessoas: yup
        .number('campo precisa ser um numero')
        .required('campo obrigatório'),
    passageiro: yup
        .string('campo precisa ser um id valido')
        .required('campo obrigatorio')

})

function missaoValidador(req, res, next) {
    missaoSchema
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
    missaoValidador
}