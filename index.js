'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3901;
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify',false);
mongoose.connect('mongodb+srv://nflorez:Niko32@cluster0-osap7.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
.then(() =>{
    console.log('Ya nos conectamos a BD Mongo Cloud y al servidor local ! =)');

    app.listen(port,()=>{
        console.log('Servidor corriendo en http://localhost:'+port);
    });
}).catch(err => console.log('Algo salió mal veamos el error ' + err));
