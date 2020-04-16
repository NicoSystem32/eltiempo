'use stric'
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var productSchema = Schema({
    nombre: String,
    categoria: String,
    precio: Number,
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Product', productSchema);
