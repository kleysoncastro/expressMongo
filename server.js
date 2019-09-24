const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const app = express();

// conexao com DB
mongoose.connect('mongodb://localhost:27017/apinode',
     {useUnifiedTopology: true, useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('Conexao com mongo bem sucedida');
});



// require manal abaixo, importacao do mudo criado em src/models

//require('./src/models/Product')

requireDir('./src/models');

// use() recebe todo tipo de requisicao

// toda requisao que chegar em /api será redirecionada para ./src/routes.js
app.use('/api', require('./src/routes'));

app.listen(3001);