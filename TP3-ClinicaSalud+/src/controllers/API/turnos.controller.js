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
  //crear nuevo turno
  /* para proteger la funcion, uso el middleware verify_token q valida si el usuario tiene un token jwt para q solo el personal autenticado pueda generar turnos */ 
  create(req,res){
    const{idPaciente, fecha, hora} = req.body;
    if (!idPaciente || !fecha ||!hora){
      return res.status(400).json({mensaje: 'Faltan datos requeridos'});
    }

    try {
      const nuevoTurno= turnosModel.create({idPaciente, fecha,hora});
      res.status(201).json({mensaje:'Turno registrado', turno:nuevoTurno});

    } catch (error){
      res.status(500).json({mensaje:'Error al registrar turno', error: error.message });
    }
  }
}

module.exports = new TurnosController();
