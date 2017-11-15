const Router = require('express').Router;
const fs = require('fs-extra');

//Iniciar el router
const pageRouter = Router();

//Crear las rutas
pageRouter
  .get('/', (req, res) => {
    res.send('<h1>HOME page</h1>')
  });

pageRouter
  .get('/about', (req, res) => {
    res.send('<h1>ABOUT page</h1>')
  });


  module.exports = pageRouter;
