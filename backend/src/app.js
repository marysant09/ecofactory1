import express from 'express';
import cors from 'cors';

import maquinaRoutes from './routes/maquinaRoutes.js';
import producaoRoutes from './routes/producaoRoutes.js';
import sustentabilidadeRoutes from './routes/sustentabilidadeRoutes.js';
import ocorrenciasRoutes from './routes/ocorrenciasRoutes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API EcoFactory funcionando!'
  });
});

app.use('/maquinas', maquinaRoutes);
app.use('/producoes', producaoRoutes);
app.use('/sustentabilidade', sustentabilidadeRoutes);
app.use('/ocorrencias', ocorrenciasRoutes);

export default app;