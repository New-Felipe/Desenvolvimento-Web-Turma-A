const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Servidor Node.js funcionando com Docker!');
});

app.get('/status', (req, res) => {
    res.json({
        status: 'online',
        mensagem: 'API funcionando corretamente!'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});