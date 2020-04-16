'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var produc_routes = require('./routes/producto');

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

app.use('/eltiempo',produc_routes);

module.exports = app;