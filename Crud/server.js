const express = require('express');
const app = express();
const port = 3000;

//disponibilizar o caminho dos arquivos estáticos
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//criar a conexão com o banco
const db = require('./db');

//rotas
//criar a rota padrão
app.get('/', (req, res) =>{
    //res.send("Front Funcionando");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


//cria a rotas para a listagem dos usuários
app.use(express.json()); //lidar com dados relacionados ao json
const apiRoutes = require('./routes/api');
app.use('/api/users', apiRoutes);



//estabelecer a ligação do servidor
app.listen(port, () => {
    console.log("Servidor está funcionando!");
});
