
const swaggerAutogen = require('swagger-autogen')({openapi:'3.0.0'})
const doc = {
    info:{
        title: 'api-empresas',
        description:'api de gerenciamentop de projetos para uma empresa'
    },
    host:'localhost3000',
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        },
    },
    security: [
        {
            bearerAuth: []
        }
    ]

};

const outputfile = './swagger.json'

const routes = ['./routes/autenticacao.routes.js', './routes/routes.js'];

swaggerAutogen(outputfile,routes,doc)