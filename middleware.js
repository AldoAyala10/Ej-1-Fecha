const middleware = (req, res, next)=>{
    console.log(`Fecha y hora: ${new Date()}`);
    console.log(`Mensaje: Acceso a la ruta`,req.path);
    next();
}
module.exports = middleware;
