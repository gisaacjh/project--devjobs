const express = require('express');
const fs = require('fs-extra');

const ejs = require('ejs');

const pageRouter = require('./src/routes/pageRouter.js');
const apiRouter = require('./src/routes/apiRouter.js');

const connectToDb = require('./src/database/dbConnect.js');
const dbConfigObj = require('./knexfile.js');


const app = express();
// const PATH = `${__dirname}/src/views/home.html`;

const appDb = connectToDb(dbConfigObj.development);

app.locals.db = appDb;

app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);



//Crar una ruta por si hay un error 404.
// app.use((req, res) => {
//   fs
//     .readFile(nonePath, 'utf-8')
//     .then(data => {
//       res.send(data);
//     })
// });
//
// app.use('/', (req, res) => {
//   fs
//     .readFile(PATH, 'utf-8')
//     .then(data => {
//       res.send(data);
//
//     })
// });

app.use(express.static(`${__dirname}/public`))
app.use('/', pageRouter);
app.use('/api/v1', apiRouter);
app.use((req, res) => {
        res.render('404.ejs')
  });



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`APP listening on PORT ${PORT}`);
});
