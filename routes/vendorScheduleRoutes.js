// Authors: Prashit Patel (B00896717), Vivekkumar Patel (B00896765)

const express = require("express");
const router = express.Router();
const vendorScheduleController = require("../controllers/vendorScheduleController");
const auth = require("../middlewares/authMiddleware.js");

router.get("/schedules", auth, vendorScheduleController.getSchedule);

router.post("/create", auth, vendorScheduleController.createSchedule);

router.put("/update/:id", auth, vendorScheduleController.updateSchedule);

router.delete("/delete/:id", auth, vendorScheduleController.deleteSchedule);

router.put("/schedules/update", auth, vendorScheduleController.updateStatus);

router.post("/schedules/add", auth, vendorScheduleController.addSchedule);

module.exports = router;
