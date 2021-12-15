const express = require('express');
var router = express.Router({ mergeParams: true });
const path = 'post-tareas';
const pgDatabase = require('../DB');


router.post(`/${path}`, (req, res) => {

    const datos = req.body;
    const producto = datos.producto;
    const tipo = datos.tipo;
    const titulo = datos.titulo;
    const fecha = datos.fecha;
    const estado = datos.estado;
    const activo = datos.activo;

    queryPost = `INSERT INTO public.tareas (producto, tipo, titulo, fecha, estado, activo)
                VALUES ('${producto}', '${tipo }', '${titulo}', '${fecha}', '${estado}', ${activo});`
    
    pgDatabase.query(queryPost)
        .then(() => { return res.status(201).json({ message: "task created successfully" }); })
        .catch((error) => { return res.status(500).json({ err: error.message }) });
});

module.exports = router;
