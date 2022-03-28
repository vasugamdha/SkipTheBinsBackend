const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const pickupRoutes = require("./routes/pickupRoutes");
const userFetchAdminRoutes = require("./routes/userFetchAdminRouts");
const vendorFetchAdminRoutes = require("./routes/vendorFetchAdminRouts");
const rewardFetchAdminRoutes = require("./routes/rewardFetchAdminRouts");

const DATABASE_URL =
  "mongodb+srv://root:root@cluster0.rv5uh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

app.use("/", pickupRoutes);
app.use("/admin", userFetchAdminRoutes);
app.use("/admin", vendorFetchAdminRoutes);
app.use("/admin", rewardFetchAdminRoutes);

module.exports = app;
