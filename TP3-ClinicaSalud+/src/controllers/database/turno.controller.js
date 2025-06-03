const Turno = require('../../models/sqlite/entities/turno.entity');
const Paciente = require('../../models/sqlite/entities/paciente.entity');
const Medico = require('../../models/sqlite/entities/medico.entity');

exports.mostrarTurno = async(req, res) => {
    try {
            const turnos = await Turno.findAll({
            include: [
            { model: Paciente },
            { model: Medico }
        ]
        });  
            res.json(turnos);
        }
        catch (error){
            res.status(400).json({error: error.message});
        }

}

exports.MostrarTurnoID = async (req,res)=>{
    try {
        const turno = await Turno.findByPk(req.params.id);
        if (!turno){
            return res.status(404).json({message: 'Turno no encontrado'});
        }
        res.status(200).json(turno);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.crearTurno = async (req, res) => {
  try {
    console.log('Body recibido:', req.body);
    const { fecha, hora, pacienteId, medicoId } = req.body;

    // Validación
    if (!fecha || !hora || !pacienteId || !medicoId) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const nuevoTurno = await Turno.create({ fecha, hora, pacienteId, medicoId });
    res.status(201).json(nuevoTurno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.eliminarTurno = async(req,res) => {
    const turno = await Turno.findByPk(req.params.id);
    try{
        await turno.destroy();
        res.status(204).send();
    }
    catch {
        if (!turno) {
        return res.status(404).json({ message: 'Turno no encontrado' });
        }   
    }
}