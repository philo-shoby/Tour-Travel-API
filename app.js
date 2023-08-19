const express = require('express');
const cors = require('cors');
const catalogueRouter = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors());




app.use('/', catalogueRouter);


module.exports = app;


