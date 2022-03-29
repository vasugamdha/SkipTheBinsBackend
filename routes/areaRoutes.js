const express = require("express");
const router = express.Router();
const areaController = require("../controllers/areaController");

router.get("/area", areaController.getArea);

router.post("/area", areaController.createArea);

module.exports = router;
