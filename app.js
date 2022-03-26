const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const pickupRoutes = require("./routes/pickupRoutes");

const DATABASE_URL =
  "mongodb+srv://vivekpatel:b00896765@skipthebins.1txlp.mongodb.net/skipthebins";

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

app.use("/", pickupRoutes);

module.exports = app;
