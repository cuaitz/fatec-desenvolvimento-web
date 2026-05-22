import mongoose from "mongoose";

const AlunoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nome é obrigatório"],
        trim: true
    },
    age: {
        type: Number,
        required: [true, "Idade é obrigatória"],
        min: [18, "Idade deve ser um número maior ou igual a 18"],
        max: [120, "Idade deve ser um número menor ou igual a 120"]
    },
    email: {
        type: String,
        required: [true, "Email é obrigatório"],
        unique: [true, "Email já cadastrado"],
        trim: true,
        lowercase: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Aluno', AlunoSchema);
