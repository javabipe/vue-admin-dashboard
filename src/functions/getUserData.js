const { zipFunctions } = require("@netlify/zip-it-and-ship-it");
zipFunctions("functions", "functions-dist");

const admin = require("firebase-admin");
const serviceAccount = require("./vue-hq-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vue-hq-12eb5.firebaseio.com"
});

exports.handler = async function(event, context, callback) {
  // only works on a deployed site, not on local development
  // const { identity, user } = context.clientContext;

  // Do the user check here
  // If not user, callback a status code of 401, meaning unauthorized

  const { email, subscriptionId } = event.queryStringParameters;
  // eslint-disable-next-line
  console.log("Searched email: " + email);
  // eslint-disable-next-line
  console.log("Searched subscription ID: " + subscriptionId);

  const searchKey = email.length > 0 ? "email" : "subscriptionId";
  const searchQuery = email.length > 0 ? email : subscriptionId;

  const firestore = admin.firestore();

  firestore
    .collection("users")
    .where(searchKey, "==", searchQuery)
    .limit(1)
    .get()
    .then((response) => {
      if (response.empty) {
        return Promise.reject();
      }

      const userInfo = response.docs[0].data();
      // eslint-disable-next-line
      console.log(userInfo);

      callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify(userInfo)
      });
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.log(err);
      const msg = Array.isArray(err) ? err[0].message : err.message;

      callback(null, {
        statusCode: 422,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(msg)
      });
    });
};
