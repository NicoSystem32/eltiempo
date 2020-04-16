'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Product = require('../models/producto');

var controller = {
    obtenerProductos: (req, res) => {

        Product.find({}).exec((err, product) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al traer los artículos'
                });
            }
            if (!product) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay productos que mostrar'
                });
            }
            return res.status(200).send({
                status: 'success',
                product
            });
        });

    },
    guardaProducto: (req, res) => {

        var params = req.body;
        try {
            var validate_nombre = !validator.isEmpty(params.nombre);
            var validate_categoria = !validator.isEmpty(params.categoria);
            var validate_precio = !validator.isEmpty(params.precio);
        } catch (err) {
            return res.status(200).send({
                status: 'err',
                message: 'Faltan parámetros'
            });
        }
        if (validate_nombre && validate_categoria && validate_precio) {
            var product = new Product();
            product.nombre = params.nombre;
            product.categoria = params.categoria;
            product.precio = params.precio;

            product.save((err, productStored) => {
                if (err || !productStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se pudo guardar el producto =('
                    });
                }
                return res.status(202).send({
                    status: 'success',
                    product: productStored
                });

            });
        } else {
            return res.status(202).send({
                status: 'error',
                message: 'Los parámetros no son válidos !'
            });
        }

    },
    actualizaProducto: (req, res) => {
        var productId = req.params.id;
        var params = req.body;
        try {
            var validate_nombre = !validator.isEmpty(params.nombre);
            var validate_categoria = !validator.isEmpty(params.categoria);
            var validate_precio = !validator.isEmpty(params.precio);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }
        if (validate_nombre && validate_categoria && validate_precio) {
            Product.findByIdAndUpdate({ _id: productId }, params, { new: true }, (err, productUpdate) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    });
                }
                if (!productUpdate) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el producto'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    product: productUpdate
                });
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'La validación no es correcta !'
            });
        }

    },
    eliminaProducto: (req, res) =>{

        var productId = req.params.id;
        Product.findByIdAndDelete({_id:productId},(err,productRemoved) =>{
            if(err)
            {
                return res.status(500).send({
                    status: 'error',
                    message: 'No se pudo borrar =('
                });
            }
            if(!productRemoved)
            {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el producto =[]'
                });
            }
            return res.status(200).send({
                status: 'success',
                product: productRemoved
            });

        });
    }





};

module.exports = controller;