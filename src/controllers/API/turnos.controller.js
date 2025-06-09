//Importamos el modelo de turnos creado anteriormente 
const turnosModel = require('../../models/mock/turnos.models.js');

class TurnosController {
  
  async ObtenerTurnos (req, res){
    try {
      const turnos = await turnosModel.list();
      res.status(200).json(turnos);
    }
    catch (error) {
      console.error("Error al obtener turnos:", error);
      res.status(500).json({mensaje: "Erorr interno del servidor"})
    }
  }

  async ObtenerTurnosId(req,res){
    try{
      const turnos = turnosModel.listByTurnoId();
      res.status(200).json(turnos);
    }
    catch (error){
      console.error("Error al obtener turnos: ", error);
      res.status(500).json({mensaje: "Error interno del servidor"});
    }
  }

  async turnosPacienteId(req, res) {
    try{
      const idPaciente = req.params.idPaciente;

      const turnos = await turnosModel.listByPacienteId(idPaciente);

      if (turnos.length > 0) {
      res.status(200).json(turnos);
      } else {
      res.status(404).json({ mensaje: 'No se encontraron turnos para ese paciente' });
      }
    }catch (error){
      console.error("Error al obtener turnos: ", error);
      res.status(500).json({mensaje: "Error interno del servidor"});

    }
  }

  async delete(req, res) {
    try {
      const idTurno = req.params.idTurno;
      const eliminado = await turnosModel.deleteById(idTurno);

      if(eliminado){
        res.status(200).json ({mensaje: "Turno eliminado correctamente"});
      }else {
        res.status(404).json({mensaje: "Turno no encontrado"});
      }

    }catch (error) {
      console.error("Error al eliminar el turno", error);
      res.status(500).json ({mensaje: "Error interno del servidor"});
    }
  }

  //crear nuevo turno
  /* para proteger la funcion, uso el middleware verify_token q valida si el usuario tiene un token jwt para q solo el personal autenticado pueda generar turnos */ 
  create(req,res){
    const{pacienteId, fecha, hora} = req.body;
    if (!pacienteId || !fecha ||!hora){
      return res.status(400).json({mensaje: 'Faltan datos requeridos'});
    }

    try {
      const nuevoTurno= turnosModel.create({pacienteId, fecha,hora});
      res.status(201).json({mensaje:'Turno registrado', turno:nuevoTurno});
      turnosModel.turnos.push(nuevoTurno)
      console.log(nuevoTurno)

    } catch (error){
      res.status(500).json({mensaje:'Error al registrar turno', error: error.message });
    }
  }

}

module.exports = new TurnosController();
