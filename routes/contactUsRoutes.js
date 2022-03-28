const express = require("express");
const controller = require("../controllers/contactUs.controllers");

const router = express.Router();

//Queries API call requests
router.get("/queries", controller.getQueries);
router.post("/query/add", controller.submitQuery);

//Vendors API call request
router.get("/vendor", controller.getVendors);
router.post("/vendor/add", controller.addVendor);
router.post("/vendor/update", controller.updateVendor);
router.delete("/vendor/delete", controller.deleteVendor);

module.exports = router;
