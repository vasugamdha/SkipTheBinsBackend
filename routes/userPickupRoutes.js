// Authors: Prashit Patel (B00896717), Vivekkumar Patel (B00896765)

const express = require("express");
const router = express.Router();
const userPickupController = require("../controllers/userPickupController");
const auth = require("../middlewares/authMiddleware.js");

router.get("/pickups", auth, userPickupController.getPickups);

router.post("/schedule", auth, userPickupController.schedulePickups);

router.delete("/cancel/:id", auth, userPickupController.cancelPickup);

router.get("/pickups/status", auth, userPickupController.trackStatus);

router.put("/update/:id", auth, userPickupController.updatePickup);

module.exports = router;
