// Author : Lokansh Gupta, Prashit Patel
const express = require("express");
const controller = require("../controllers/rewardStore.controllers");

const router = express.Router();

//Queries API call requests
router.get("/voucher/allDetails", controller.getVoucherDetails);
router.get("/reward/getPoints", controller.getRewardPoints);
router.post("/reward/updatePoints", controller.updateRewardPoints);
router.put("/reward/updateComplaintPoints", controller.updateComplaintRewardPoints);

module.exports = router;
