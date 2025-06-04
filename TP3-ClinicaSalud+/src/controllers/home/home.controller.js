//necesito  usar el token
const turno = require('../../models/sqlite/entities/turno.entity');
const paciente = require('../../models/sqlite/entities/paciente.entity');
const medico = require('../../models/sqlite/entities/medico.entity');
// renderizo las vistas, si es medico tiene otro tipo de vista
const home = async (req, res) => {
    res.render('home',{
        title: 'Clinica Salud +',
        message: '¡Bienvenido a la Clinica Salud +!'
    })
}
const login = async (req, res) => {
    res.render('login', {
        title: 'Login',
        message: 'Iniciar sesion'

    });
};
const vistaTurnos = async (req, res) => {
   try {
      const turnos = await turno.findAll({
         include: [
            { model: paciente },
            { model: medico }
         ]
      });
      const esMedico = req.usuario?.rol === 'medico'; // req.usuario viene del middelware

        res.render('turnos', {
      title: 'Turnos',
      message: 'Listado de turnos',
      turnos,
      esMedico,
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
const vistaPacientes = async (req, res) => {
    try {
      const pacientes = await paciente.findAll();
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


// llam,o a la funcion lista de pacientesmodel (un arreglo de pacientes)


module.exports = {
   home,
   login,
   vistaPacientes,
   vistaTurnos
}



