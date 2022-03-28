const express = require("express");
const router = express.Router();
router.use(express.json());
const vendorScheduleController = require("../controllers/vendorScheduleController");

router.get("/schedules", vendorScheduleController.vendorPickups);

router.put("/schedules/update", vendorScheduleController.updateStatus);

module.exports = router;
