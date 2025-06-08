const turno = require('../../models/sqlite/entities/turno.entity');
const paciente = require('../../models/sqlite/entities/paciente.entity');
const medico = require('../../models/sqlite/entities/medico.entity');


//VISTA DE LA PAGINA PRINCIPAL EN EJS
const home = async (req, res) => {
    res.render('home',{
        title: 'Clinica Salud +',
        message: '¡Bienvenido a la Clinica Salud +!'
    })
}

//VISTA DEL LOGIN EN EJS
const login = async (req, res) => {
    res.render('login', {
        title: 'Login',
        message: 'Iniciar sesion',
        usuario: res.locals.usuario,
        esMedico: res.locals.esMedico
    });
};


module.exports = {
   home,
   login,
   //vistaPacientes,
   //vistaTurnos
}



