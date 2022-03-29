import express from 'express';
import { getUnapprovedVendorList, approveVendorProfile, getVendorDeletionRequestList, requestVendorDeletion, declineVendorDeletion, declineVendorCreation } from '../controllers/adminController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/unapprovedList', auth, getUnapprovedVendorList);
router.patch('/:id/approveVendorProfile', auth, approveVendorProfile);
router.get('/deletionList', auth, getVendorDeletionRequestList);
router.delete('/:id/requestDeletion', auth, requestVendorDeletion);
router.delete('/:id/declineVendorCreation', auth, declineVendorCreation);
router.patch('/:id/declineVendorDeletion', auth, declineVendorDeletion);

export default router;