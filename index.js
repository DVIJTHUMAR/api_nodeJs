import dotenv from 'dotenv';
dotenv.config();
import db  from './confige/db.js'
import router from './routes/index.js';
import empRoutes from  './routes/empRoutes.js';
import express from  'express';
var app = express();
const port = process.env.PORT;

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use('/', router);


app.listen(port,()=>{
    console.log("Server is Run......", port);
});