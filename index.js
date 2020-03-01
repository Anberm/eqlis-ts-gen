const Swagger = require('swagger-client');
// import Swagger from 'swagger-client'
var client =new Swagger('http://localhost:61878/swagger/v1/swagger.json');
clienwt.then(e=>{
    console.log(JSON.stringify(e));
    getModels(e);
});


function getModels(swaggerJson){
    const components=swaggerJson.spec.components;
    var models=components.schemas

}


