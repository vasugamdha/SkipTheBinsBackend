const express = require("express");
const router = express.Router();
const vendorScheduleController=require("../controllers/vendorScheduleController");

router.get("/schedules", vendorScheduleController.getSchedule);

router.post("/create", vendorScheduleController.createSChedule);

router.put("/update/:id", vendorScheduleController.updateSchedule);

router.delete("/delete/:id", vendorScheduleController.deleteSchedule);

module.exports = router;
