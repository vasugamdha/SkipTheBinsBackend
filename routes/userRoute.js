import express from 'express';

import { signup, login, editProfile, changePassword, deleteProfile, verifyAccount } from '../controllers/userController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/verify/:verificationCode', verifyAccount)
router.post('/signup', signup);
router.post('/login', login);
router.patch('/:id/editProfile',auth, editProfile)
router.patch('/:id/changePassword',auth, changePassword)
router.delete('/:id/deleteProfile',auth , deleteProfile)

export default router;