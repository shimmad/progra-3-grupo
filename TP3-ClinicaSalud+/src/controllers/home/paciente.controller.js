const Paciente = require('../../models/sqlite/entities/paciente.entity');

exports.obtenerPacientes = async (req,res)=> {
    try {
      const pacientes = await Paciente.findAll();
       const esMedico = req.usuario?.rol === 'medico';
      res.render('pacientes', {
        title: 'Pacientes',
        message: 'Listado de pacientes',
        pacientes,
        esMedico,
        error: null
      });
    } catch (error) {
      console.error('Error al obtener pacientes:', error);
      res.render('pacientes', {
        title: 'Pacientes',
        message: 'Listado de pacientes',
        pacientes: [],
        esMedico: false,
        error: 'Error al cargar pacientes'
      });
    }
};

//Registro del paciente
exports.registrarPaciente = async (req, res) => {

        const {nombre, apellido, dni} = req.body;
        const pacienteExistente = await Paciente.findOne({where:{dni}});
       
        if(!pacienteExistente){
        const esMedico = req.usuario?.rol === 'medico';
        const nuevoPaciente = await Paciente.create({
            nombre,
            apellido,
            dni
        });

        const pacientes = await Paciente.findAll();
        console.log('Paciente guardado con ID:', nuevoPaciente.id);
        return res.status(200).render('pacientes', {
            title: 'Pacientes',
            message: 'Listado de pacientes',
            pacientes,
            esMedico,
            error: null
            });
        }
        else {
          console.log('Error al registrar al paciente');
          const pacientes = await Paciente.findAll();
          const esMedico = req.usuario?.rol === 'medico';
          return res.status(406).render('pacientes', {
            title: 'Pacientes',
            message: 'Listado de pacientes',
            pacientes,
            esMedico,
            error: "Este paciente ya esta registrado"
            });
        }
}

//Eliminacion del paciente en la base de datos
exports.borrarPaciente = async (req,res) => {
    const paciente = await Paciente.findByPk(req.params.id);
    await paciente.destroy();
    res.status(200).redirect('/pacientes');
}

