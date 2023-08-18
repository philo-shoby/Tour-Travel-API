const { onRequest } = require("firebase-functions/v2/https");
const app = require('./app');

// Entry point of the API

exports.api = onRequest(app);

