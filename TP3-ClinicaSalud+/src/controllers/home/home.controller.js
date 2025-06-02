
// controladores
const home = async (req, res) => {
    res.render('home',{
        title: 'Clinica Salud +',
        message: '¡Bienvenido a la clinica!'
    })
}
const login = async (req, res) => {
    res.render('login', {
        title: 'Login',
        message: 'Iniciar sesion'

    });
};
// llam,o a la funcion lista de pacientesmodel (un arreglo de pacientes)
const pacientes = async (req, res) => {
    try {
        const pacientes = await pacientesModel.list();
        res.render('pacientes',{
        title: 'Pacientes',
        message: 'Listado de pacientes',
        pacientes: pacientes,
        error: null
    });}
    catch (error) {
        res.render('pacientes',{
            title: 'Pacientes',
            message: 'Listado de pacientes',
            pacientes: null,
            error: "error al obtener los pacientes"
        });
        
    }
    };

const turnos = async (req, res) => {
    try {
        const turnos = await turnosModel.list();
        res.render('turnos',{
        title: 'Turnos',
        message: 'Listado de turnos',
        turnos: turnos,
        error: null
    });}
    catch (error) {
        res.render('turnos',{
            title: 'Turnos',
            message: 'Listado de turnos',
            turnos: null,
            error: "error al obtener los turnos"
        });
        
    }
    };

module.exports = {
   home,
   login,
   pacientes,
   turnos
}



