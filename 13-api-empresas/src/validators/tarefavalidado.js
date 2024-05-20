const yup = require('yup')


const projetoschema = yup.object().shape({
    nome: yup
        .string('campo precias ser um texto')
        .required('campo obrigatorio'),
    descricao: yup
        .string(),
    datadeinicio: yup
        .string('campo precias ser um texto')
        .required('campo obrigatorio'),
    datadefim: yup
        .string('campo precias ser um texto')
        .required('campo obrigatorio'),
    funcionario: yup
        .string('campo precias ser um texto'),
    projeto: yup
        .string('campo precias ser um texto')


})

function tarefavalidador(req, res, next) {
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

module.exports = {
    tarefavalidador
}