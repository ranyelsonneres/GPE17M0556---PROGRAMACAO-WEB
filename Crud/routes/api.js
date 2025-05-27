const express = require('express');
const router = express.Router();

//conectar ao banco
const db = require('../db');

//criar as rotas
//listar todos os usuários: READ
router.get('/', (req, res) => {
    //executar a consulta sql
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

module.exports = router;
