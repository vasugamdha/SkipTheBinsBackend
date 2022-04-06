// Author : Lokansh Gupta, Prashit Patel
const express = require("express");
const controller = require("../controllers/rewardStore.controllers");

const router = express.Router();

//Queries API call requests
router.get("/voucher/allDetails", controller.getVoucherDetails);
router.get("/reward/getPoints", controller.getRewardPoints);
router.post("/reward/updatePoints", controller.updateRewardPoints);
router.post("/voucher/purchase", controller.purchaseVoucher);

router.get("/voucher/getPurchaseVouchers", controller.getPurchasedVouchers);
router.get("/voucher", controller.getVouchers);
router.post("/voucher/add", controller.addVoucher);
router.post("/voucher/update", controller.updateVoucher);
router.post("/voucher/delete", controller.deleteVoucher);
router.put(
  "/reward/updateComplaintPoints",
  controller.updateComplaintRewardPoints
);

module.exports = router;
