import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import alunoRoutes from './routes/alunoRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/alunos', alunoRoutes);
app.use('/auth', authRoutes);

console.log("Connecting to MongoDB");
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
});
