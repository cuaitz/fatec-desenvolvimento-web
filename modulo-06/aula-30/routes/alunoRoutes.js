import { Router } from 'express';
import { listarAlunos, criarAluno, deletarAluno, atualizarAluno, buscarAlunoPorId } from '../controller/alunoController.js';
import requireAuth from '../middleware/auth.js';
const router = Router();

router.get('/', requireAuth, listarAlunos);
router.post('/', requireAuth, criarAluno);
router.delete('/:id', requireAuth, deletarAluno);
router.put('/:id', requireAuth, atualizarAluno);
router.get('/:id', requireAuth, buscarAlunoPorId);

export default router;
