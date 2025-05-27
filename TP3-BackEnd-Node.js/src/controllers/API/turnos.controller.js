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

  delete(req, res) {
    const idTurno = req.params.idTurno;
    const eliminado = turnosModel.deleteById(idTurno);

    if (eliminado) {
      res.status(200).json({ mensaje: 'Turno eliminado correctamente' });
    } else {
      res.status(404).json({ mensaje: 'Turno no encontrado' });
    }
  }
}

module.exports = new TurnosController();
