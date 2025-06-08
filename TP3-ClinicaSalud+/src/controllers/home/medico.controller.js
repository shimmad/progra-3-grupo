const Medico = require('../../models/sqlite/entities/medico.entity');

exports.crearMedico = async (req,res) => {
    try {
        await Medico.create(
        {
            id: 1,
            nombre: 'Lucia Gomez',
            email: "admin@clinica.com",
            password: "admin1234"

        }
    )
    } catch (error) {
        console.log(" No se pudo crear el medico", error);
    }};

