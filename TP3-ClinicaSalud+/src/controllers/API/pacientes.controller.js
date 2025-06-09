const pacientesModel = require('../../models/mock/pacientes.models.js')
const Paciente = require('../../models/mock/entities/paciente.entity.js')
class PacientesController {
    async list(req, res) {

        res.status(200).json(await pacientesModel.list());
    }
    async create(req, res) {
        const {dni,nombre,apellido,email} = req.body;

        const nuevoPaciente = new Paciente(dni,nombre,apellido,email);

        const info = await pacientesModel.create(nuevoPaciente);
        res.status(200).json(info);
    }
    
    async delete(req, res) {
        try {
            const id = req.params.id;
            const eliminado = await pacientesModel.delete(id);

            if (eliminado) {
                res.status(200).json({ message: "Elemento eliminado correctamente" });
            } else {
                res.status(404).json({ message: "Paciente no encontrado" });
            }
        } catch (error) {
            console.error("Error al eliminar paciente:", error);
            res.status(500).json({ message: "Error interno del servidor" });
        }
    }

    update(req, res) {
        const id = req.params.id;
         const {dni,nombre,apellido,email} = req.body;
          const nuevoPaciente = new Paciente(dni,nombre,apellido,email);
          pacientesModel.update(id,nuevoPaciente);
        res.status(200).json({message:"actualizado"});
    }
}

module.exports = new PacientesController();




