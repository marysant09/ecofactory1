import express from 'express';

import {
  listarMaquinas,
  buscarMaquina,
  criarMaquina,
  atualizarMaquina,
  excluirMaquina
} from '../controllers/maquinaController.js';

const router = express.Router();

router.get('/', listarMaquinas);
router.get('/:id', buscarMaquina);
router.post('/', criarMaquina);
router.put('/:id', atualizarMaquina);
router.delete('/:id', excluirMaquina);

export default router;