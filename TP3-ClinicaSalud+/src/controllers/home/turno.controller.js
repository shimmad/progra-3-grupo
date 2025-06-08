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
            const esMedico = req.usuario?.rol === 'medico'; // req.usuario viene del middelware

            res.render('turnos', {
                title: 'Turnos',
                message: 'Listado de turnos',
                turnos,
                esMedico,
                Paciente,
                error: null
            });
        } catch (error) {
        console.error('Error al obtener turnos:', error);
        res.render('turnos', {
            title: 'Turnos',
            message: 'Listado de turnos',
            turnos: [],
            esMedico: false,
            error: 'Error al cargar turnos'
        });

    }
        
};


exports.crearTurno = async (req, res) => {

    console.log('Body recibido:', req.body);
    const { fecha, hora, pacienteId, medicoId } = req.body;

    // VALIDACION: RELLENO DE LOS CAMPOS OBLIGATORIOS
    if (!fecha || !hora || !pacienteId) {
        const turnos = await Turno.findAll({include: [{ model: Paciente },{ model: Medico, attributes: ['nombre'] }]});
        const esMedico = req.usuario?.rol === 'medico';
        return res.status(406).render('turnos', {
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

};

exports.eliminarTurno = async(req,res) => {
    console.log('Eliminando turno con ID:', req.params.id);
       
    const turno = await Turno.findByPk(req.params.id);
    await turno.destroy();
    console.log('Turno eliminado:', req.params.id);
    return res.status(200).redirect('/turnos');
    
};
