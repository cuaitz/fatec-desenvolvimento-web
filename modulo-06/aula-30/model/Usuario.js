import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema = new mongoose.Schema({
  nome:  { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  senha: { type: String, required: true, minlength: 6 }
}, { timestamps: true });

// criptografa a senha antes de salvar
usuarioSchema.pre('save', async function() {
  if (!this.isModified('senha')) return;
  this.senha = await bcrypt.hash(this.senha, 10);
});

// Método para comparar senha
usuarioSchema.methods.compararSenha = function(senha) {
  return bcrypt.compare(senha, this.senha);
};

export default mongoose.model('users', usuarioSchema);
