const express = require("express");
const router = express.Router();
const userPickupController = require("../controllers/userPickupController");

router.get("/pickups", userPickupController.getPickups);

router.post("/schedule", userPickupController.schedulePickups);

router.delete("/cancel/:id", userPickupController.cancelPickup);

module.exports = router;