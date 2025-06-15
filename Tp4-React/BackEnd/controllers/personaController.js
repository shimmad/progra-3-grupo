import personasData from '../models/personaModel.js';

export const personas = (req, res) => {
    res.json(personasData);
};

export const getPersonaById = (req, res) => {
    const { id } = req.params;
    const personaId = parseInt(id);
    const persona = personasData.find(p => p.id === personaId);
    
    if (!persona) {
        return res.status(404).json({ 
            error: 'Persona no encontrada',
            message: 'No existe una persona con ID ${id}'
        });
    }
    
    res.json(persona);
};