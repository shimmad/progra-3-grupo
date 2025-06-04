const {Router} = require('express');
const pacienteControllerDB = require('../controllers/database/paciente.controller.js');
const rutaPacienteDB = Router();


//rutas CRUD BASE DE DATOS
rutaPacienteDB.get('/',pacienteControllerDB.obtenerPacientes);
rutaPacienteDB.get('/registro', (req,res)=>{res.render('registroPaciente',{ title: 'Registrar Paciente', success:req.query.success==='true'})});
rutaPacienteDB.post('/registro', pacienteControllerDB.registrarPaciente);
rutaPacienteDB.get('/:id', pacienteControllerDB.obtenerPacientesID);
rutaPacienteDB.delete('/:id', pacienteControllerDB.borrarPaciente);



module.exports = rutaPacienteDB;