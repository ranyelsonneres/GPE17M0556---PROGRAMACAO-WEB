const mysql = require('mysql2');

//criar a estrutura de conexão com o banco
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123', //senha: c@tolic@ ou catolica
    database: 'userdb3',
    //port: '3307'
});

//estabelecer a conexão com o banco
db.connect(err => {
    if (err) throw err;
    console.log('conectado ao banco de dados');
});

module.exports = db;
