const Turno = require('../../models/sqlite/entities/turno.entity');
const Paciente = require('../../models/sqlite/entities/paciente.entity');
const Medico = require('../../models/sqlite/entities/medico.entity');
const { where } = require('sequelize');

exports.mostrarTurno = async(req, res) => {
    try {
            const turnos = await Turno.findAll({
            include: [
                { model: Paciente, attributes: ['nombre'] ['apellido']},
                { model: Medico, attributes: ['nombre']}
            ]
        });  
            res.status(200);
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
        res.status(200).send(turno);
    } catch (error) {
        res.status(500).send("Error al mostrar el turno");
    }
}

exports.crearTurno = async (req, res) => {
  try {
    console.log('Body recibido:', req.body);
    const { fecha, hora, pacienteId, medicoId } = req.body;

    // VALIDACION: RELLENO DE LOS CAMPOS OBLIGATORIOS
    if (!fecha || !hora || !pacienteId) {
        const turnos = await Turno.findAll({include: [{ model: Paciente },{ model: Medico }]});
        const esMedico = req.usuario?.rol === 'medico';
        return res.render('turnos', {
            title: 'Turnos',
            message: 'Listado de turnos',
            turnos,
            esMedico,
            Paciente,
            error: "Todos los campos son obligatorios"
            });
    }

    //VALIDACION: SI EL ID DEL PACIENTE NO COINCIDE LANZA ERROR
    const pacienteExistente = await Paciente.findByPk(pacienteId);
    if (!pacienteExistente) {
        const turnos = await Turno.findAll({include: [{ model: Paciente },{ model: Medico }]});
        const esMedico = req.usuario?.rol === 'medico';
        return res.status(404).render('turnos', {
            title: 'Turnos',
            message: 'Listado de turnos',
            turnos,
            esMedico,
            Paciente: null,
            error: "Este paciente no existe"
        });
    }

    //VALIDACION: SI LA FECHA Y LA HORA COINCIDEN LANZA ERROR
    const dia = await Turno.findOne({where:{fecha}});
    const horario = await Turno.findOne({where:{hora}});
    if(dia && horario){
        const turnos = await Turno.findAll({include: [{ model: Paciente },{ model: Medico }]});
        const esMedico = req.usuario?.rol === 'medico';
        return res.status(406).render('turnos', {
            title: 'Turnos',
            message: 'Listado de turnos',
            turnos,
            esMedico,
            Paciente: null,
            error: "Turno ya ocupado"
        });
    }

    await Turno.create({ fecha, hora, pacienteId, medicoId:1 });
    return res.redirect('/turnos');

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.eliminarTurno = async(req,res) => {
    console.log('Eliminando turno con ID:', req.params.id);
    
    try{
        const turno = await Turno.findByPk(req.params.id);
        await turno.destroy();
        console.log('Turno eliminado:', req.params.id);
        return res.status(200).redirect('/turnos');
    }
    catch (error) {
        console.error('Error al eliminar turno:', error.message);
        res.status(500).send('Error al eliminar el turno');
        }   
    };
