'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

app.get('*',(req,res) =>{
    console.log("El api esta corriendo bien ! =)");
    return res.status(200).send(`
    <h1>Super Market El Tiempo</h1>
    <h2>Administración de productos</h2>
    `);

});


module.exports = app;