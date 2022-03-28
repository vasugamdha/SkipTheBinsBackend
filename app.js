const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const cors=require('cors');
const pickupRoutes = require("./routes/pickupRoutes");
const faqRoutes = require("./routes/faqRoutes");
const DATABASE_URL =
  "mongodb+srv://root:root@skipthebins.jbqs2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

app.use(cors());
app.use("/",pickupRoutes);
app.use("/faq", faqRoutes);

module.exports = app;
