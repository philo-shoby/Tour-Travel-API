const app = require('../app');
const verifyFirebaseToken = require('../middlewares/verifyFirebaseToken');
const mongoDb = require('../middlewares/mongodb');
const express = require('express');
const catalogueRouter = express.Router();

// Retrieve all the travel catalogues available to the traveller or admin
catalogueRouter.get('/catalogue', verifyFirebaseToken, (req, res) => {
    mongoDb.connect()
    .then(() => {
        console.log("mongodb connected")
        const database = mongoDb.db('tour_travel');
        const catalogue = database.collection('catalogue');
        return catalogue.find().toArray();
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        if (err) {
          console.error('Error connecting to MongoDB:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
    })
})

// Create or Update the catalogues by the property owner
catalogueRouter.post('/catalogue', verifyFirebaseToken, (req, res) => {
    mongoDb.connect()
    .then(() => {
        const database = mongoDb.db('tour_travel');
        const catalogue = database.collection('catalogue');
        let filter = { uid : req.body.uid}
        let update = { $set: req.body }; 
        let options = { upsert: true };
        return catalogue.updateOne(filter, update, options);
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        if (err) {
          console.error('Error connecting to MongoDB:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
    })
})

// Retrieve user details based on the user id from logged in user
catalogueRouter.get('/users', verifyFirebaseToken, (req, res) => {
    mongoDb.connect()
    .then(() => {
        const filter = req.query;
        const database = mongoDb.db('tour_travel');
        const users = database.collection('user-data');
        return users.find(filter).toArray();
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        if (err) {
          console.error('Error connecting to MongoDB:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
    })
})

// Update the catalog/bookings/details of the user
catalogueRouter.put('/users', verifyFirebaseToken, (req, res) => {
    mongoDb.connect()
    .then(() => {
        const database = mongoDb.db('tour_travel');
        const users = database.collection('user-data');
        let filter = { uid : req.body.uid}
        let update = { $set: req.body }; 
        let options = { upsert: true };
        return users.updateOne(filter, update, options);
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        if (err) {
          console.error('Error connecting to MongoDB:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
    })
})

// Creates new user accounts
catalogueRouter.post('/users', (req, res) => {
    mongoDb.connect()
    .then(() => {
        const database = mongoDb.db('tour_travel');
        const users = database.collection('user-data');
        let filter = { uid : req.body.uid}
        let update = { $set: req.body }; 
        let options = { upsert: true };
        return users.updateOne(filter, update, options);
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        if (err) {
          console.error('Error connecting to MongoDB:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
    })
})

module.exports = catalogueRouter;