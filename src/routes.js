const express = require('express');
const routes = express.Router();

// importacao do modudo criado em ProductController
const produtoController = require('./controller/ProductController');

routes.get('/', produtoController.index);


module.exports = routes;