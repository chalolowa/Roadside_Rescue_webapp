var admin = require("firebase-admin");

var serviceAccount = require("../roadside-rescue-b24bb-firebase-adminsdk-daj4z-768f107fa9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = {db, admin};