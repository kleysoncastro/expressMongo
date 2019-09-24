//import mongoose from 'mongoose';
const mongoose = require('mongoose')
/* 
criacao de um model

*/

// Schema e estutura do bando mondoDB

// Schcema protudo
const ProductSchema = new mongoose.Schema({

title:{
    type: String, required: true,
},

description:{
    type: String, required: true,
},

url:{
    type: String, required: true,

}, 

createdAt:{

    type: Date, default: Date.now, 
},

});

// cria efetivamente o modulo 
// deve ser passa como required no aquivo de servidor da aplicacao ==> server.js
// essa istancia nomeia e instacia para importacao em outra classe
mongoose.model('Produto', ProductSchema);
