import fs from 'fs';
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const data = fs.readFileSync('./dados.json', 'utf-8');
    res.setHeader('Content-Type', 'application/json');
    return res.send(data);
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});