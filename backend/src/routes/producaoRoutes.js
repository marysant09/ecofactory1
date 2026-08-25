import express from 'express';

import {
  listarProducoes,
  buscarProducao,
  criarProducao,
  atualizarProducao,
  excluirProducao
} from '../controllers/producaoController.js';

const router = express.Router();

router.get('/', listarProducoes);
router.get('/:id', buscarProducao);
router.post('/', criarProducao);
router.put('/:id', atualizarProducao);
router.delete('/:id', excluirProducao);

export default router;