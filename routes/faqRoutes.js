// Author : Aabhaas Jain
const express = require("express");
const router = express.Router();
const faqController = require('../controllers/faqController');
const faqRequestController = require('../controllers/faqRequestController');

router.get("/", faqController.getFaq);

router.post("/", faqController.createFaq);

router.put("/:id", faqController.updateFaq);

router.delete("/:id", faqController.deleteFaq);

router.get("/requests", faqRequestController.getRequests);

router.post("/create-request", faqRequestController.createRequest);

router.delete("/deny-request/:id", faqRequestController.deleteRequest);

router.post("/approve-request", faqRequestController.approveRequest);

module.exports = router;