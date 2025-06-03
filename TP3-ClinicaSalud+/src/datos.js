const {Paciente,Medico,Turno} = require("./models/sqlite/associate.js");

async function crearDatos() {
    try {
        console.log("Tablas creadas y relacionadas");

        const paciente = await Paciente.create({
        id: 1,
        nombre: 'Juan Perez',
        email:"juanitoPerez@gmail.com",
        dni: '12345678'
        });

        const medico = await Medico.create({
        id:1,
        nombre: 'Dra. Gómez',
        especialidad: 'Dermatología',
        email: "LucianaGomez@gmail.com",
        password: "123456y"
        });

        const turno = await Turno.create({
        fecha: '2025-06-10',
        hora: '09:00',
        medicoId: medico.id,
        pacienteId: paciente.id,
        
        });

        const turnoConDatos = await Turno.findByPk(1, {
        include: [
        { model: Paciente },
        { model: Medico }
        ]
        });
    
        //console.log(turnoConDatos.toJSON());

    }catch(error){
        console.error('Error creando datos:', error);
    }
    
}

async function mostrarTurno(idTurno) {
     try {
        const turnoConDatos = await Turno.findByPk(idTurno, {
        include: [Paciente, Medico]
        });

        if (!turnoConDatos) {
        console.log('No se encontró el turno con ID:', idTurno);
        return;
        }
        
        console.log(turnoConDatos.toJSON());
        
    }catch(error){
        console.log("Error consultando el turno:", error);
    }
}

module.exports = {
    crearDatos,
    mostrarTurno
}
