const {Router} = require('express');
const pacienteControllerDB = require('../controllers/database/paciente.controller.js');
const rutaPacienteDB = Router();
const verifyToken= require('../middleware/verify.token')


//rutas CRUD BASE DE DATOS
rutaPacienteDB.get('/',pacienteControllerDB.obtenerPacientes);
rutaPacienteDB.post('/', verifyToken, pacienteControllerDB.registrarPaciente);
rutaPacienteDB.get('/:id', pacienteControllerDB.obtenerPacientesID);
rutaPacienteDB.delete('/:id', pacienteControllerDB.borrarPaciente);



module.exports = rutaPacienteDB;