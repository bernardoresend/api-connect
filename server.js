const express = require('express');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const PORT = 3000;

// Permite que a API receba dados em formato JSON
app.use(express.json());

// Rota inicial para verificar o funcionamento da API
app.get('/', (req, res) => {
    return res.status(200).json({
        mensagem: 'API Connect funcionando com sucesso'
    });
});

// Rotas de usuários
app.use(usersRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});