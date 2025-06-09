const {Router} = require('express');
const turnoControllerDB = require('../../controllers/home/turno.controller');
const rutaTurnoDB = Router();
const verifyToken= require('../../middleware/verify.token')


//rutas CRUD BASE DE DATOS
rutaTurnoDB.get('/',verifyToken,turnoControllerDB.mostrarTurno);
rutaTurnoDB.post('/',verifyToken, turnoControllerDB.crearTurno);
rutaTurnoDB.delete('/:id', turnoControllerDB.eliminarTurno);

module.exports = rutaTurnoDB;