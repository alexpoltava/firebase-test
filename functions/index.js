
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.test = functions.https.onCall((data, context) => {
  return admin.auth().listUsers(1000, nextPageToken);
});
