const Turno = require('../../models/sqlite/entities/turno.entity');
const Paciente = require('../../models/sqlite/entities/paciente.entity');
const Medico = require('../../models/sqlite/entities/medico.entity');

exports.mostrarTurno = async(req, res) => {
    try {
            const turnos = await Turno.findAll({
            include: [
                { model: Paciente, attributes: ['nombre'] ['apellido']},
                { model: Medico, attributes: ['nombre']}
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
    if (!fecha || !hora || !pacienteId) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const nuevoTurno = await Turno.create({ fecha, hora, pacienteId, medicoId:1 });
    res.redirect('/turnos');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.eliminarTurno = async(req,res) => {
    console.log('Eliminando turno con ID:', req.params.id);
    
    try{
        const turno = await Turno.findByPk(req.params.id);
        if (!turno) {
        return res.status(404).json({ message: 'Turno no encontrado' });
        }
        await turno.destroy();
        console.log('Turno eliminado:', req.params.id);
        res.redirect('/turnos');
    }
    catch {
        console.error('Error al eliminar turno:', error.message);
        res.status(500).send('Error al eliminar el turno');
        }   
    };
