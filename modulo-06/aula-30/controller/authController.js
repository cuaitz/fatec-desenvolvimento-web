import jwt from 'jsonwebtoken';
import Usuario from '../model/Usuario.js';

export const registrar = async (req, res) => {
	try {
		const { nome, email, senha } = req.body;

		if (!nome || !email || !senha) {
			return res.status(400).json({ message: 'nome, email e senha são obrigatórios' });
		}

		const usuarioExiste = await Usuario.findOne({ email });
		if (usuarioExiste) {
			return res.status(400).json({ message: 'Email já cadastrado' });
		}

		const usuario = await Usuario.create({ nome, email, senha });

		const token = jwt.sign(
			{ id: usuario._id },
			process.env.JWT_SECRET,
			{ expiresIn: '24h' }
		);

		return res.status(201).json({
			message: 'Usuário registrado com sucesso',
			token,
			usuario: {
				id: usuario._id,
				nome: usuario.nome,
				email: usuario.email
			}
		});
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const login = async (req, res) => {
	try {
		const { email, senha } = req.body;

		if (!email || !senha) {
			return res.status(400).json({ message: 'email e senha são obrigatórios' });
		}

		const usuario = await Usuario.findOne({ email });
		if (!usuario) {
			return res.status(401).json({ message: 'Credenciais inválidas' });
		}

		const senhaValida = await usuario.compararSenha(senha);
		if (!senhaValida) {
			return res.status(401).json({ message: 'Credenciais inválidas' });
		}

		const token = jwt.sign(
			{ id: usuario._id },
			process.env.JWT_SECRET,
			{ expiresIn: '24h' }
		);

		return res.json({
			message: 'Login realizado com sucesso',
			token,
			usuario: {
				id: usuario._id,
				nome: usuario.nome,
				email: usuario.email
			}
		});
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
