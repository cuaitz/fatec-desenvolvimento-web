import { Router } from 'express';
import { listarAlunos, criarAluno, deletarAluno, atualizarAluno, buscarAlunoPorId } from '../controller/alunoController.js';

const router = Router();

router.get('/', listarAlunos);
router.post('/', criarAluno);
router.delete('/:id', deletarAluno);
router.put('/:id', atualizarAluno);
router.get('/:id', buscarAlunoPorId);

export default router;
