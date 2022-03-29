const express = require("express");
const { getUnapprovedVendorList, approveVendorProfile, getVendorDeletionRequestList, requestVendorDeletion, declineVendorDeletion, declineVendorCreation } = require("../controllers/adminController.js");
const auth = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get('/unapprovedList', auth, getUnapprovedVendorList);
router.patch('/:id/approveVendorProfile', auth, approveVendorProfile);
router.get('/deletionList', auth, getVendorDeletionRequestList);
router.delete('/:id/requestDeletion', auth, requestVendorDeletion);
router.delete('/:id/declineVendorCreation', auth, declineVendorCreation);
router.patch('/:id/declineVendorDeletion', auth, declineVendorDeletion);

export default router;