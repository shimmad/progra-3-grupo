//RELACIONES 

const Paciente = require("./entities/paciente.entity");
const Medico = require("./entities/medico.entity");
const Turno = require("./entities/turno.entity");

//Un turno pertenece a un solo paciente entonces...
Turno.belongsTo(Paciente,{foreignKey:"pacienteId"});
Paciente.hasMany(Turno, {foreignKey:"pacienteId"});

//Un turno pertenece a un medico 
Turno.belongsTo(Medico,{foreignKey:"medicoId"});
Medico.hasMany(Turno, {foreignKey:"pacienteId"});

module.exports={
    Paciente,
    Medico,
    Turno
};