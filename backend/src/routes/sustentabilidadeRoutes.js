import express from 'express';

import {
  listarSustentabilidade,
  buscarSustentabilidade,
  criarSustentabilidade,
  atualizarSustentabilidade,
  excluirSustentabilidade
} from '../controllers/sustentabilidadeController.js';

const router = express.Router();

router.get('/', listarSustentabilidade);
router.get('/:id', buscarSustentabilidade);
router.post('/', criarSustentabilidade);
router.put('/:id', atualizarSustentabilidade);
router.delete('/:id', excluirSustentabilidade);

export default router;