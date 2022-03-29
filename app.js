const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const databaseConnection = require("./middlewares/databaseConnection");
app.use(express.json());
app.use(cors());

const analyticsRoutes = require("./routes/analyticsRoutes");
const faqRoutes = require("./routes/faqRoutes");
const userPickupRoutes = require("./routes/userPickupRoutes");
const vendorScheduleRoutes = require("./routes/vendorScheduleRoutes");
const areaRoutes = require("./routes/areaRoutes");
const contactUsRoutes = require("./routes/contactUsRoutes");

databaseConnection();

const rootRoute = "/api/";
app.use(rootRoute + "faq", faqRoutes);
app.use(rootRoute + "user", userPickupRoutes);
app.use(rootRoute + "vendor", vendorScheduleRoutes);
app.use(rootRoute + "/admin", analyticsRoutes);
app.use(rootRoute, areaRoutes);
app.use(rootRoute, contactUsRoutes);

module.exports = app;
