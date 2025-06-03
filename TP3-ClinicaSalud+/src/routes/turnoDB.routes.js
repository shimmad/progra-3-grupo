const {Router} = require('express');
const turnoControllerDB = require('../controllers/database/turno.controller');
const rutaTurnoDB = Router();


//rutas CRUD BASE DE DATOS
rutaTurnoDB.get('/',turnoControllerDB.mostrarTurno);
rutaTurnoDB.get('/:id', turnoControllerDB.MostrarTurnoID);
rutaTurnoDB.post('/', turnoControllerDB.crearTurno);
rutaTurnoDB.delete('/:id', turnoControllerDB.eliminarTurno);

module.exports = rutaTurnoDB;