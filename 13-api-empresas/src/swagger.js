const swaggerAutogen = require('swagger-autogen');

const swaggerautogen = require('swagger-autogen')({openapi:'3.0.0'})
const doc = {
    info:{
        title: 'api-empresas',
        description:'api de gerenciamentop de projetos para uma empresa'
    },
    host:'localhost3000'
};
const outputfile = './swagger.json'

const routes = ['./routes/autentica.routes.js', './routes/routes.js'];

swaggerAutogen(outputfile,routes,doc)