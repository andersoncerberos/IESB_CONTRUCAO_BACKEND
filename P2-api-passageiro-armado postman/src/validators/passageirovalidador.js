const yup = require('yup')

const passageiroschema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    datanascimento: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    cpf: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    email: yup
        .string('campo precisa ser uma texto')
        .email('E-mail inválido')
        .required('campo obrigatório'),
    telefone: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    genero: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),
    arma: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),
    orgao: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),
    missao: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatorio'),
})

function passageiroValidador(req, res, next) {
    passageiroschemaschema
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
    passageiroValidador
}