const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/API/turnos.controller');

// Consultar turnos por identificador
// Endpoint: GET /api/v1/turnos/:idPaciente

router.get('/:idPaciente', turnosController.listByPaciente);

module.exports = router;
