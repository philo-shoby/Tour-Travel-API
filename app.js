const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); 
const catalogueRouter = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://tour-travels-bfd7d.web.app",
    methods: ['GET', 'POST'],
}));


// Initialise Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
app.use('/', catalogueRouter);


module.exports = app;


