const express = require('express');
const rutahome = express.Router();
const {home, pacientes, turnos} = require('../controllers/home/home.controller.js');
const verificarToken = require('../middleware/verify.token');


rutahome.get('/', home);//verificarToken
rutahome.get('/pacientes', verificarToken, pacientes);
rutahome.get('/turnos', verificarToken, turnos);


module.exports = rutahome;






