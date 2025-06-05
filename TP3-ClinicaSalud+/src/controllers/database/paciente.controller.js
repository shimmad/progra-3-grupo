const Paciente = require('../../models/sqlite/entities/paciente.entity');

exports.obtenerPacientes = async (req,res)=> {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    }
    catch (error){
        res.status(500).json({error: error.message});
    }
};

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

exports.registrarPaciente = async (req, res) => {
    try {
        const {nombre, apellido, dni} = req.body;

        const nuevoPaciente = await Paciente.create({
            nombre,
            apellido,
            dni
        })
        res.redirect('/pacientes');
        console.log('Paciente guardado con ID:', nuevoPaciente.id);

    } catch (error) {
        console.log('Error al registrar al paciente', error);
        res.status(500).send('Error al registrar paciente');
    }
}

exports.borrarPaciente = async (req,res) => {
    const paciente = await Paciente.findByPk(req.params.id);
    try{
        await paciente.destroy();
        res.status(204).send();
    }
    catch {
        if (!paciente) {
        return res.status(404).json({ message: 'Paciente no encontrado' });
        }   
    }
};