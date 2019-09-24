const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=> {

   return res.send('nova rota');
});

module.exports = routes;