const express = require('express');
const router = express.Router();
const {home, pacientes, turnos} = require('../controllers/home/home.controller.js');
const verificarToken = require('../middleware/verify.token');


//rutas, renderizo home
router.get('/', verificarToken, home);
router.get('/pacientes', verificarToken, pacientes);
router.get('/turnos', verificarToken, turnos);


module.exports = rutaHome;






