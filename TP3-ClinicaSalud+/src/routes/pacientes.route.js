const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js')
const rutaPacientes = Router();

rutaPacientes.get('/', pacientesController.list);
rutaPacientes.post('/',pacientesController.create);
rutaPacientes.put('/:id',pacientesController.update);
rutaPacientes.delete('/:id',pacientesController.delete);

module.exports = rutaPacientes;