const express = require('express');
const rutahome = express.Router();

const {login} = require('../controllers/home/home.controller.js');
const {home, vistaPacientes, vistaTurnos} = require('../controllers/home/home.controller.js');
const verificarToken = require('../middleware/verify.token');

rutahome.get('/login', verificarToken, login);
rutahome.get('/', home);

rutahome.get('/pacientes', verificarToken, vistaPacientes);
rutahome.get('/turnos', verificarToken, vistaTurnos);


module.exports = rutahome;






