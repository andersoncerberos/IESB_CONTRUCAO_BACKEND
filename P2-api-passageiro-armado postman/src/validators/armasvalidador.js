const yup = require('yup');


const armaSchema = yup.object().shape({
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

// Definindo o esquema para o array de armas com limite de 3 objetos
const armasArraySchema = yup.array()
    .of(armaSchema)
    .min(1, 'limite minimmo de armas ')
    .max(3, 'limite maximo de armas');

function armasValidador(req, res, next) {
    armasArraySchema
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