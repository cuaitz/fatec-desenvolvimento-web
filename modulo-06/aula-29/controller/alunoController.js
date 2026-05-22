import Aluno from '../model/Aluno.js';

export const listarAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.find();
        return res.json(alunos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const criarAluno = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const aluno = await Aluno.create({ name, age, email });
        return res.status(201).json(aluno);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletarAluno = async (req, res) => {
    const { id} = req.params;
    try {
        const aluno = await Aluno.findByIdAndDelete(id);
        if (!aluno) {
            return res.status(404).json({ message: 'Aluno não encontrado' });
        }
        return res.json({ message: 'Aluno deletado com sucesso' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
