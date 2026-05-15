import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.json());

const users = JSON.parse(fs.readFileSync('./users.json', {
    encoding: 'utf-8'
}));

const saveUsers = () => {
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
}

// get
app.get('/users', (req, res) => {
    return res.send(users);
});

// post
app.post('/users', (req, res) => {
    const { name, age, email } = req.body;

    if (!name || !age || !email) {
        return res.status(400).json({success: false, message: 'Todos os campos são obrigatórios.'});
    }

    if (users.find(user =>  user.email === email)) {
        return res.status(400).json({success: false, message: 'Este e-mail já está cadastrado.'});
    }

    users.push({
        id: users.length + 1, name, age, email
    });

    saveUsers();

    return res.status(201).json({success: true, message: 'Usuário cadastrado com sucesso.'});
});

// put
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;

    user = users.find(user => user.id === parseInt(id));

    if (!user) {
        return res.status(404).json({success: false, message: 'Usuário não encontrado.'});
    }

    name && (user.name = name);
    age && (user.age = age);
    if (email) {
        if (users.find(user => user.email === email && user.id !== id)) {
            return res.status(400).json({success: false, message: 'Este e-mail já está cadastrado.'});
        }
        user.email = email;
    };

    saveUsers();
    return res.status(201).json({success: true, message: 'Usuário atualizado com sucesso.'})
});

// delete
app.delete('/users/:id', (req, res) => {
    const { id } = parseInt(req.params);

    users = users.filter(user => user.id !== id);

    saveUsers();
    return res.status(201).json({success: true, message: 'Usuário deletado com sucesso.'});
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
