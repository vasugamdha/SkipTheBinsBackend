const express = require("express");
const router = express.Router();

const userPickupController = require("../controllers/userPickupController");
router.get("/pickups", userPickupController.userPickup);

router.get("/pickups/status", userPickupController.trackStatus);

module.exports = router;
