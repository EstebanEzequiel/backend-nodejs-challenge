const express = require('express');
var router = express.Router({ mergeParams: true });
const path = 'get-tareas';
const pgDatabase = require('../DB');

router.get(`/${path}`, (req, res) => {

    queryGet = `SELECT * FROM public.tareas               
                ORDER BY id ASC`

    pgDatabase.query(queryGet)
        .then((data) => { return data.length === 0? res.status(400).json({ err: "not found"}) : res.status(200).json(data) })
        .catch((error) => { return res.status(500).json({ err: error.message }) });
});

module.exports = router;