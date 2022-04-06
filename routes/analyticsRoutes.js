const express = require("express");
const controller = require("../controllers/analytics.controllers");
const router = express.Router();
const auth = require("../middlewares/authMiddleware.js");

router.get("/get-all-rewards", auth,  controller.getAllRewardsAdmin);
router.get("/get-all-users", auth, controller.getAllUsersAdmin);

module.exports = router;