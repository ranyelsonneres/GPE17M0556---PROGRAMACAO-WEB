const express = require('express');
const app = express();
const port = 3000;

//criar a conexão com o banco
const db = require('./db');

//rotas
//criar a rota padrão
app.get('/', (req, res) =>{
    res.send("Front Funcionando");
});


//cria a rotas para a listagem dos usuários
const apiRoutes = require('./routes/api');
app.use('/api/users', apiRoutes);



//estabelecer a ligação do servidor
app.listen(port, () => {
    console.log("Servidor está funcionando!");
});
