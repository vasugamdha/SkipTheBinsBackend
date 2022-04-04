// Author : Lokansh Gupta
const express = require("express");
const controller = require("../controllers/rewardStore.controllers");

const router = express.Router();

//Queries API call requests
router.get("/voucher/allDetails", controller.getVoucherDetails);
router.get("/reward/getPoints", controller.getRewardPoints);

module.exports = router;
