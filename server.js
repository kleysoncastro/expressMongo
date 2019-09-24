const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const app = express();

// conexao com DB
mongoose.connect('mongodb://localhost:27017/apinode', {useUnifiedTopology: true, useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('Conexao com mongo bem sucedida');
});



// require manal abaixo, importacao do mudo criado em src/models

//require('./src/models/Product')

requireDir('./src/models');

// o parametro passsado nessa funcao deve ser o mesmo nome da implementacao em Product.js
const Product = mongoose.model('Produto');// essa parametro produto é da classe Product

// istancia
var camisa = new Product({
    title: 'Camisa Naruto',
    description: "camisa g",
    url: 'www.google.com/img'
});
camisa.save().then(() =>{
console.log("Procuto salva");

}).catch((erro)=>{
    console.log('Erro ao salvar');
});

app.get('/', (req, res) => {
   return res.send("pagina root testes");
});


app.listen(3001);