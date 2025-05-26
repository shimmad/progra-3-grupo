//Importamos el modelo de turnos creado anteriormente 
const turnosModel = require('../../models/mock/turnos.models.js');

class TurnosController {
  listByPaciente(req, res) {
    const idPaciente = req.params.idPaciente;

    const turnos = turnosModel.listByPacienteId(idPaciente);

    if (turnos.length > 0) {
      res.status(200).json(turnos);
    } else {
      res.status(404).json({ mensaje: 'No se encontraron turnos para ese paciente' });
    }
  }
}

module.exports = new TurnosController();
