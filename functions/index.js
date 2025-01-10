
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NUTK8SBoTj8MkcTcVBM42JfcTaxVfKdKqQwbOLcGDVy90u8xmW7nfo42IgwOn4rFUB80lbd1QblINGhfe0K53pZ00PRGc7pXS"
);


// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
// exports.api = functions.https.onRequest(app);
app.listen(5000);

//Example Endpoint
//http://127.0.0.1:5001/clone-75c00/us-central1/api