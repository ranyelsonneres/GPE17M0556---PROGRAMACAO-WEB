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

//rota para CREATE: INSERT
router.post('/', (req, res) => {
    const {nome, email} = req.body;

    //executar a instrução sql
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({id: result.insertId, nome, email});
    });
});

//rota para atualização: update
router.put('/:id', (req, res) => {
    const {nome, email} = req.body;
    const {id} = req.params;

    //executar a instrução sql
    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) => {
        if(err) return res.status(500).send(err);
        res.json({id, nome, email});
    });
});


//rota para a exclusão: DELETE
router.delete('/:id', (req, res) => {
    const {id} = req.params

    //instrução sql
    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if(err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});
module.exports = router;
