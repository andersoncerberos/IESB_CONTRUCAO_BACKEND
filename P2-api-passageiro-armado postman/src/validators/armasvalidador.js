const yup = require('yup');


const armasSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    tipo: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    numeracao: yup
        .number('campo precisa ser um numero')
        .required('campo obrigatório'),
    quantidade: yup
        .number('campo precisa ser um numero')
        .required('campo obrigatório')
});




function armasValidador(req, res, next) {
    armasSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                };
                return erro;
            });
            res.status(400).json({
                mensagem: "Falha na validação dos campos",
                erros: errors
            });
        });
}

module.exports = {
    armasValidador
};