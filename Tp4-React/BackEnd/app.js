import express from 'express';
import personaRoutes from './routes/personaRoutes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use('/personas', personaRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
