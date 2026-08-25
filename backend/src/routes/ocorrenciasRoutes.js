import express from 'express';

import {
  listarOcorrencias,
  buscarOcorrencia,
  criarOcorrencia,
  atualizarOcorrencia,
  excluirOcorrencia
} from '../controllers/ocorrenciasController.js';

const router = express.Router();

router.get('/', listarOcorrencias);
router.get('/:id', buscarOcorrencia);
router.post('/', criarOcorrencia);
router.put('/:id', atualizarOcorrencia);
router.delete('/:id', excluirOcorrencia);

export default router;