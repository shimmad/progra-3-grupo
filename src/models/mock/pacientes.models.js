const Persona = require('./entities/paciente.entity.js');

class PacientesModel {
  constructor() {
    this.data = [];
    this.data.push(new Persona("123456787","Sergio","Antozzi","email@gmail.com",1));
    this.id = 2;
  }
  // crea un dato nuevo (alta de cliente)
  async create(paciente) {
    return new Promise((resolve, reject) => {
      if (!paciente) {
        return reject(new Error("Paciente inválido"));
      }
      paciente.id = this.id;
      this.id++;
      this.data.push(paciente);

      resolve(paciente);
      
    });
  }
  // actualiza los datos del cliente con id = id
  async update(id, paciente) {
    try {
      const pacienteEncontrado = this.data.find((p)=>p.id==id);
      if (!pacienteEncontrado) {
        throw new Error("No se encontro el paciente");
      }
     pacienteEncontrado.dni = paciente.dni 
     pacienteEncontrado.email = paciente.email;
     pacienteEncontrado.nombre = paciente.nombre;
     pacienteEncontrado.apellido = paciente.apellido

     return true;
    } catch (error) {
      console.log(error.message());
      return false;
    }
  
  }
  // elimina el cliente con id = id
  async delete(id) {
    try {
      const index = this.data.findIndex((p) => p.id == id);
      if (index == -1){
        return false;
      }

         this.data.splice(index, 1); // elimina el elemento
      return true;
    } catch (error) {
      console.error("Error al eliminar paciente:", error.message);
      return false;
    }
  
  }
  
  // devuelve la lista completa en un arreglo de strings
  async list() {
    return new Promise(
        (resolve,reject)=>{
            resolve(this.data);
        }
    );
  }
}

module.exports = new PacientesModel();
