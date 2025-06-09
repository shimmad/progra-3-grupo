const {Router} = require('express');
const pacienteControllerDB = require('../../controllers/home/paciente.controller.js');
const rutaPacienteDB = Router();
const verifyToken= require('../../middleware/verify.token.js')


//rutas CRUD BASE DE DATOS
rutaPacienteDB.get('/', verifyToken, pacienteControllerDB.obtenerPacientes);
rutaPacienteDB.post('/', verifyToken, pacienteControllerDB.registrarPaciente);
rutaPacienteDB.delete('/:id', pacienteControllerDB.borrarPaciente);



module.exports = rutaPacienteDB;