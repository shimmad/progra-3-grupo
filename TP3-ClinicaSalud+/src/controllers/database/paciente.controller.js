const Paciente = require('../../models/sqlite/entities/paciente.entity');

exports.obtenerPacientes = async (req,res)=> {
    try {
        const pacientes = await Paciente.findAll();
    }
    catch (error){
        res.status(500).json({error: error.message});
    }
};

//Funcionalidad para filtrar
exports.obtenerPacientesID = async (req,res)=>{
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (!paciente){
            return res.status(404).json({message: 'Paciente no encontrado'});
        }
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

//Registro del paciente
exports.registrarPaciente = async (req, res) => {
    try {
        const {nombre, apellido, dni} = req.body;
        
        const pacienteExistente = await Paciente.findOne({where:{dni}});
        if(pacienteExistente){
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
        
        const nuevoPaciente = await Paciente.create({
            nombre,
            apellido,
            dni
        })
        console.log('Paciente guardado con ID:', nuevoPaciente.id);
        return res.status(200).redirect('/pacientes'); 
        
    } catch (error) {
        console.log('Error al registrar al paciente', error);
        res.status(500).send('Error al registrar paciente');
    }
}

//Eliminacion del paciente en la base de datos
exports.borrarPaciente = async (req,res) => {
    const paciente = await Paciente.findByPk(req.params.id);
    try{
        await paciente.destroy();
        res.status(200).redirect('/pacientes');
    }
    catch {
        if (!paciente) {
        return res.status(404).send('Este paciente no existe');
        }   
    }
};