const yup = require('yup')

const passagemschema = yup.object().shape({
    companiaAerea: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    destino: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    dataPartida: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    dataChegada: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    numeroPassagem: yup
        .number('campo precisa ser um numero')
        .required('campo obrigatório'),
    passageiro: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),
})

function passagemValidador(req, res, next) {
    passagemschema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            console.log(err)
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
    passagemValidador
}