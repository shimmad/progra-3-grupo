import express from 'express';
import { personas, getPersonaById } from '../controllers/personaController.js';

const router = express.Router();

// GET todas las personas
router.get('/', personas);

// GET persona por ID
router.get('/:id', getPersonaById);

export default router;