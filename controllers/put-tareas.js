const express = require('express');
var router = express.Router({ mergeParams: true });
const path = 'put-tareas';
const pgDatabase = require('../DB');

router.put(`/${path}`, (req, res) => {

    const datos = req.body;
    const id = datos.id;
    const producto = datos.producto;
    const tipo = datos.tipo;
    const titulo = datos.titulo;
    const fecha = datos.fecha;
    const estado = datos.estado;
    const activo = datos.activo;
    
    queryPut = `UPDATE public.tareas 
                SET producto = '${producto}', tipo = '${tipo}', titulo = '${titulo}', fecha= '${fecha}', estado= '${estado}', activo= ${activo} 
                WHERE id = ${id}`;
    
    pgDatabase.query(queryPut)
        .then(() => { return res.status(200).json({ message:"task updated successfully" }); })
        .catch((error) => { return res.status(500).json({ err: error.message }) });
});

module.exports = router;
