import express from 'express';
const app = express();

app.use(express.json());

const users = []

// METHOD/Método => GET, POST, PUT/PATCH, DELETE
// NAME/Nome => / - sempre no plural
// Callback functions => Onde executamos o backend (lógica, regra de negócio, etc)

app.post('/users', (req, res) => {
    console.log(req)
    const body = req.body
    users.push(body)
    res.status(201).send('Usuário criado com sucesso!')
});

app.get('/users', (req, res) => {
    res.send({message: 'Esses são os users', users})
})


app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});