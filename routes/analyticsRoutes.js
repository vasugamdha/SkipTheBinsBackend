const express = require("express");
const controller = require("../controllers/analytics.controllers");
const router = express.Router();

router.get("/get-all-rewards", controller.getAllRewardsAdmin);
router.get("/get-all-users", controller.getAllUsersAdmin);

module.exports = router;