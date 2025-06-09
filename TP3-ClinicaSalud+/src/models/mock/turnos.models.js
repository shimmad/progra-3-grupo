const Turno = require('./entities/turno.entity.js');

//Turnos de ejemplo para poder consultar
class TurnosModel {
  constructor() {
    this.turnos = [];
    this.turnos.push(new Turno (1, 2, "23/05/2025", "10:00"));
    this.turnos.push(new Turno (2, 3, "24/05/2025", "11:00"));
    this.turnos.push(new Turno (3, 3, "25/05/2025", "12:00"));
    this.turnos.push(new Turno (4, 4, "26/05/2025", "13:00"));
    this.turnos.push(new Turno (5, 5, "27/05/2025", "14:00"))
  }

  async list() {
    return this.turnos;
  }

  async listByTurnoId(id){
    return this.turnos.filter(t => t.id == parseInt (id));
  }//promise

  async listByPacienteId(idPaciente) {
    return this.turnos.filter(t => t.pacienteId == parseInt (idPaciente));

  }

  async deleteById(idTurno){
    const index = this.turnos.findIndex(t => t.pacienteId == parseInt(idTurno));
    if (index !== -1){
      this.turnos.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

   async create({ pacienteId, fecha, hora }) {
    const id = this.turnos.length > 0
      ? this.turnos[this.turnos.length - 1].id + 1
      : 1;

    const nuevoTurno = new Turno(id, pacienteId, fecha, hora);
    this.turnos.push(nuevoTurno);
    return nuevoTurno;
  }

}

module.exports = new TurnosModel();