'use stric'
var express = require('express');
var ProductController = require('../controllers/producto');
var router = express.Router();



router.get('/home',ProductController.obtenerProductos);
router.post('/guardar',ProductController.guardaProducto);
router.get('/productos',ProductController.obtenerProductos);
router.put('/actualizaproducto/:id',ProductController.actualizaProducto);
router.delete('/eliminaproducto/:id',ProductController.eliminaProducto);


module.exports = router;