const express = require('express');
const rutahome = express.Router();

const {login, home} = require('../../controllers/home/home.controller.js');
const verificarToken = require('../../middleware/verify.token.js');

rutahome.get('/login', verificarToken, login);
rutahome.get('/', home);

//rutahome.get('/pacientes', verificarToken, vistaPacientes);
//rutahome.get('/turnos', verificarToken, vistaTurnos);


module.exports = rutahome;






