const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const userPickupRoutes = require("./routes/userPickupRoutes");
const vendorScheduleRoutes = require("./routes/vendorScheduleRoutes");

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

const rootRoute = "/api/";
app.use(rootRoute + "user", userPickupRoutes);
app.use(rootRoute + "vendor", vendorScheduleRoutes);

module.exports = app;
