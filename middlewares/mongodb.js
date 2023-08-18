const { MongoClient } = require("mongodb");

//MongoDB setup
const uri = "mongodb+srv://lisalenoy:%40lisalenoy98@tourtraveldb.jnpkfge.mongodb.net/?retryWrites=true&w=majority";
const mongoDb = new MongoClient(uri, { useNewUrlParser: true });

module.exports = mongoDb;

