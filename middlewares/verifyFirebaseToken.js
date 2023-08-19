const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json'); 

// Middleware to verify Firebase authentication token

// Initialise Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
function verifyFirebaseToken(req, res, next) {
    const token = req.headers["authorization"];
  
    if (!token) {
      return res.status(401).json({ message: 'Token missing' });
    }
  
    admin.auth().verifyIdToken(token)
      .then((decodedToken) => {
          console.log(decodedToken)
        req.user = decodedToken;
        next();
      })
      .catch((error) => {
          console.log(error)
        return res.status(403).json({ message: 'Token invalid', error: error });
      });
}

module.exports = verifyFirebaseToken;


