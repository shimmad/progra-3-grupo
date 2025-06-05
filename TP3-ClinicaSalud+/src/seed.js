const {Paciente,Medico,Turno} = require("./models/sqlite/associate.js");

async function crearDatos() {
    try {
        console.log("Tablas creadas y relacionadas");

        const paciente = await Paciente.create({
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        email:"juanitoPerez@gmail.com",
        dni: '12345678'
        });

        const paciente2 = await Paciente.create({
        id: 2,
        nombre: 'Romina',
        apellido: 'Sanchez',
        email:"sanchezRomi@gmail.com",
        dni: '14786478'
        });

        const paciente3 = await Paciente.create({
        id: 3,
        nombre: 'Eladio',
        apellido: 'Rios',
        email:"eladioR@gmail.com",
        dni: '35786342'
        });

        const medico = await Medico.create({
        id:1,
        nombre: 'Dra. Lucia Gómez',
        especialidad: 'Dermatología',
        email: "LucianaGomez@gmail.com",
        password: "123456y"
        });

        const turno = await Turno.create({
        fecha: '10-06-2025',
        hora: '09:00',
        medicoId: medico.id,
        pacienteId: paciente.id,
        
        });

        const turno2 = await Turno.create({
        fecha: '15-06-2025',
        hora: '10:00',
        medicoId: medico.id,
        pacienteId: paciente2.id,
        
        });

        const turno3 = await Turno.create({
        fecha: '17-06-2025',
        hora: '10:00',
        medicoId: medico.id,
        pacienteId: paciente3.id,
        
        });

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
        
    }catch(error){
        console.log("Error consultando el turno:", error);
    }
}

module.exports = {
    crearDatos,
    mostrarTurno
}
