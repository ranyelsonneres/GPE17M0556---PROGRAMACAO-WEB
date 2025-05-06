const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    res.end('Hello, World - Node JS - Deu certo!');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


//Acesse esse endereço: https://dontpad.com/web-2025
