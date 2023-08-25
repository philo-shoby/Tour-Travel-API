const { MongoClient } = require("mongodb");
const uri = require('../environment').URI;

//MongoDB setup

const mongoDb = new MongoClient(uri, { useNewUrlParser: true });

module.exports = mongoDb;

