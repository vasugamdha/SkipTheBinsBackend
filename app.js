const express = require("express");
var cors = require('cors')
const app = express();
const databaseConnection = require("./middlewares/databaseConnection");
app.use(express.json());
app.use(cors());

const pickupRoutes = require("./routes/pickupRoutes");
const faqRoutes = require("./routes/faqRoutes");

const userPickupRoutes = require("./routes/userPickupRoutes");
const vendorScheduleRoutes = require("./routes/vendorScheduleRoutes");
const areaRoutes = require("./routes/areaRoutes");

databaseConnection();

const rootRoute = "/api/";
app.use(rootRoute+"/faq", faqRoutes);
app.use(rootRoute+"user", userPickupRoutes);
app.use(rootRoute+"vendor", vendorScheduleRoutes);
app.use(rootRoute, areaRoutes);

module.exports = app;
