const app = require('./app');
const config = require('./config')


app.listen(config.port , function (){
    console.log(`Aplicación corriendo en htpp://localhost:${config.port}`)
    console.log("Desarrollado por: Ramla Pro. Software");
    console.log("Ramla Pro. Software 2016");
    console.log("Dueño del producto: MK Capital S.A.S");
});
