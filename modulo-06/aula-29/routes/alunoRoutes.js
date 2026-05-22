import { Router } from 'express';
import { listarAlunos, criarAluno, deletarAluno } from '../controller/alunoController.js';

const router = Router();

router.get('/', listarAlunos);
router.post('/', criarAluno);
router.delete('/:id', deletarAluno);

export default router;
