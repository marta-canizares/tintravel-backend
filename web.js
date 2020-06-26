import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const path = require('path');
import userRouter from './router/userRouter';
import postsRouter from './router/postsRouter';
import perfilRouter from './router/perfilRouter';
import comentarioRouter from './router/comentarioRouter.js';
import errorRouter from './router/errorRouter.js'
import contactoRouter from './router/contactoRouter.js'

import manejoError from './middleware/manejo-error.js';


dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())

//app.use(express.static('Tintravel'))

app.use(express.static(path.join(__dirname, 'Tintravel')));
/*
app.get('/', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'Tintravel', 'index.html'));
});
*/
app.get('/', function (req, res) {
    res.render('index');
});

//app.use('/', express.static(process.cwd() + '/Tintravel'))
app.listen(8080, () => console.log(`Front end app listening on port 80!`))

