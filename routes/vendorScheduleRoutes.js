// Authors: Prashit Patel (B00896717), Vivekkumar Patel (B00896765)

const express = require("express");
const router = express.Router();
const vendorScheduleController = require("../controllers/vendorScheduleController");

router.get("/schedules", vendorScheduleController.getSchedule);

router.post("/create", vendorScheduleController.createSchedule);

router.put("/update/:id", vendorScheduleController.updateSchedule);

router.delete("/delete/:id", vendorScheduleController.deleteSchedule);

router.put("/schedules/update", vendorScheduleController.updateStatus);

router.post("/schedules/add", vendorScheduleController.addSchedule);

module.exports = router;
