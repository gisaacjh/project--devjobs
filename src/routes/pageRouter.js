const Router = require('express').Router;
const fs = require('fs-extra');

//Iniciar el router
const pageRouter = Router();

//Crear la ruta
pageRouter
  .get('/', (req, res) => {
    res.send('<header>Home View</header>')
  });

  module.exports = pageRouter;
