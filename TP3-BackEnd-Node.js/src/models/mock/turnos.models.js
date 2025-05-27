//Turnos de ejemplo para poder consultar
const turnos = [
    {id: 1, pacienteId: 1, fecha: '23/05/2025', hora: '10:00'},
    {id: 2, pacienteId: 2, fecha: '24/05/2025', hora: '11:00'},
    {id: 3, pacienteId: 3, fecha: '25/05/2025', hora: '12:00'},
    {id: 4, pacienteId: 4, fecha: '26/05/2025', hora: '13:00'},
    {id: 5, pacienteId: 5, fecha: '27/05/2025', hora: '14:00'},
]

//Exporta la funcion que recibe el ID del paciente y devuelve su turno
module.exports = {
    listByPacienteId: (idPaciente) => {
        return turnos.filter( t => t.pacienteId == parseInt(idPaciente));
    },

    deleteById: (idTurno) => {
    const index = turnos.findIndex(t => t.id === parseInt(idTurno));
    if (index !== -1) {
      turnos.splice(index, 1); // Esto elimina el turno
      return true;
    } else {
      return false;
    }
  }
};
