
const swaggerAutogen = require('swagger-autogen')({openapi:'3.0.0'})
const doc = {
    info:{
        title: 'api-empresas',
        description:'api de cadastro de passageiro portando arma de fogo para embarca em avioes domesticos '
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

const routes = ['./routes/routes.js'];

swaggerAutogen(outputfile,routes,doc)