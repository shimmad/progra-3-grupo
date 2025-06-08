const express = require('express');
const router = express.Router();
const turnosController = require('../../controllers/API/turnos.controller');
//const verifyToken= require('../middleware/verify.token')
// Consultar turnos por identificador
// Endpoint: GET /api/v1/turnos/:idPaciente

router.get('/:idPaciente', turnosController.list);

// Eliminar turnos por identificador
// Endpoint: DELETE /api/v1/turnos/:idTurno
router.delete('/:idTurno', turnosController.delete);

router.post('/', turnosController.create);
//tura protegida x JWT para crear nuevos turnos, solo accesible con token



module.exports = router;
