const {Router} = require('express');
const turnoControllerDB = require('../controllers/database/turno.controller');
const rutaTurnoDB = Router();
const verifyToken= require('../middleware/verify.token')


//rutas CRUD BASE DE DATOS
rutaTurnoDB.get('/',turnoControllerDB.mostrarTurno);
rutaTurnoDB.post('/',verifyToken, turnoControllerDB.crearTurno);
rutaTurnoDB.delete('/:id', turnoControllerDB.eliminarTurno);
rutaTurnoDB.get('/:id', turnoControllerDB.MostrarTurnoID);

module.exports = rutaTurnoDB;